var app = {

    game : null,
	menu : null,
	startButton : null,
	levelButton : null,
	UIScore : null,
	UILimit : null,
	UITimer : null,
	UILevel : null,
	gameStatus : null,
	enemy : null,
	canFire : false,
	fault : false,
	level : 0,
	limit : 0,
	score : 0,
	levelBonus : 0,
	hit : new CustomEvent('hit'),
	randomEnemy : 0,
	
    sfxDeath : new Audio('sfx/death.m4a'),
    sfxFire : new Audio('sfx/fire.m4a'),
    sfxFault : new Audio('sfx/foul.m4a'),
    sfxIntro : new Audio('sfx/intro.m4a'),
    sfxShot : new Audio('sfx/shot.m4a'),
    sfxWait : new Audio('sfx/wait.m4a'),
    sfxWin : new Audio('sfx/win.m4a'),
	
	initialize : function () {
		app.game = document.querySelector('.game');
		app.menu = document.querySelector('.menu');
		app.startButton = document.querySelector('.menu-start');
		app.levelButton = document.querySelector('.game-next-level');
		app.UIScore = document.querySelector('.score');
		app.UILimit = document.querySelector('.header-limit');
		app.UITimer = document.querySelector('.header-timer');
		app.UILevel = document.querySelector('.game-level');
		app.gameStatus = document.querySelector('.game-status');
		app.enemy = document.querySelector('.enemy');
		app.randomEnemy = Math.round(1 + Math.random() * 4);
		app.startButton.addEventListener('click', app.startGame);
		app.enemy.addEventListener('transitionend', app.startDuel);
		app.enemy.addEventListener('hit', app.gunmanHit);
	},
	
    startGame : function() {
        app.gameStatus.classList.remove('game-status-show');
        app.enemy.classList.remove('enemy-' + app.randomEnemy);
        app.level = 1;
		app.limit = 1000;
        app.score = 0;
        app.menu.classList.add('menu-hide');
        app.enemy.addEventListener('mousedown', app.playerHit);
        app.enemy.classList.add('enemy-' + app.randomEnemy);
        app.showUI();
        app.clearAnimation();
        app.enemyMove();
    },

    enemyMove : function() {
        app.enemy.style.left = '';
        if(app.enemy.classList.contains('enemy-move')) {
            app.enemy.classList.remove('enemy-move');
        }
        setTimeout(function() {
            app.enemy.classList.add('enemy-move');
            app.enemyWalk();
            app.sfxIntro.play();
        }, 50);
    },

    startDuel : function() {
        app.sfxIntro.pause();
        app.sfxIntro.currentTime = 0;
        app.enemyStay();
        app.sfxWait.play();
        setTimeout(function() {
            if(!app.fault) {
                app.gameStatus.textContent = 'FIRE!';
                app.gameStatus.classList.add('game-status-show');
                app.canFire = true;
                app.enemyReady();
                app.sfxFire.play();
                app.countdown(new Date().getTime());
                setTimeout(app.gunmanHit, app.limit);
            }
        }, 1100);
    },

    countdown : function(time) {
        var currTime;
        function timer() {
            currTime = new Date().getTime();
            if(app.canFire) { // stop time when player or gunman hits
                app.levelBonus = ((currTime - time)/1000).toFixed(2);
                app.UITimer.textContent = 'You: ' + app.levelBonus;
                setTimeout(timer, 10);
            }
        }
        timer();
    },

    playerHit : function() {
        if(app.canFire) {
            app.enemy.removeEventListener('mousedown', app.playerHit);
            app.canFire = false;
            app.sfxShot.play();
            app.enemyDown();
			setTimeout(app.enemyDead, 2000);
			app.score = (+app.score + (app.limit/1000 - app.levelBonus) * app.level).toFixed(2);
            app.gameStatus.textContent = 'You won!';
            app.UIScore.textContent = app.score;
            setTimeout(function() {
                app.sfxWin.play();
            }, 1000);
            setTimeout(function() {
                app.levelButton.addEventListener('click', app.nextLevel);
                app.levelButton.classList.add('game-next-level-show');
            }, 2000);
        }
        else {
            app.fault = true;
			app.sfxIntro.pause();
            app.sfxIntro.currentTime = 0;
            app.sfxShot.play();
			var left = app.enemy.offsetLeft;
            app.enemy.classList.remove('enemy-move');
            app.enemy.style.left = left + 'px';
            app.clearAnimation();
			app.enemy.removeEventListener('mousedown', app.playerHit);
            app.enemy.removeEventListener('transitionend', app.startDuel);
            app.gameStatus.textContent = 'Fault!';
            app.gameStatus.classList.add('game-status-show');
            app.score = (+app.score - 0.5).toFixed(2);
            if(app.score < 0) app.score = 0;
            setTimeout(function() {
                app.sfxFault.play();
            }, 1000);
            setTimeout(app.restartLevel, 2000);
        }
    },

    gunmanHit : function() {
        if(app.canFire) {
            app.canFire = false;
            app.sfxShot.play();
			app.enemy.removeEventListener('mousedown', app.playerHit);
            app.enemy.dispatchEvent(app.hit);
            app.enemyHit();
            app.gameStatus.textContent = 'Gunman won!';
            setTimeout(function() {
                app.sfxDeath.play();
            }, 1000);
            setTimeout(app.gameOver, 2000);
        }
    },

    nextLevel : function() {
        if(app.level < 5) {
            app.clearAnimation();
            app.gameStatus.textContent = '';
            app.gameStatus.classList.remove('game-status-show');
            app.enemy.classList.remove('enemy-' + app.randomEnemy);
            app.levelButton.removeEventListener('click', app.nextLevel);
            app.levelButton.classList.remove('game-next-level-show');
            app.level++;
			app.randomEnemy = Math.round(1 + Math.random() * 4);
            app.limit -= 120;
            app.enemy.classList.add('enemy-' + app.randomEnemy);
            app.showUI();
            app.enemy.addEventListener('mousedown', app.playerHit);
            app.enemyMove();
        } else app.gameOver();
    },

    restartLevel : function() {
        app.fault = false;
        app.gameStatus.classList.remove('game-status-show');
        app.enemy.addEventListener('mousedown', app.playerHit);
        app.enemy.addEventListener('transitionend', app.startDuel);
        app.showUI();
        app.enemyMove();
    },

    showUI : function() {
        app.UILevel.textContent = 'Level ' + app.level;
        app.UIScore.textContent = app.score;
        app.UILimit.textContent = 'Gunman: ' + (app.limit/1000).toFixed(2);
        app.UITimer.textContent = 'You: 0.00 ';
    },

    gameOver : function() {
        var menuInner = app.menu.querySelector('.menu-inner');
        if(app.gameScore) app.gameScore.remove();
        app.gameScore = document.createElement('p');
        app.gameScore.textContent = 'Your reward: ' + app.score;
        menuInner.insertBefore(app.gameScore, menuInner.firstChild);
        app.menu.classList.remove('menu-hide');
        app.levelButton.removeEventListener('click', app.nextLevel);
        app.levelButton.classList.remove('game-next-level-show');
        app.clearAnimation();
    },


    enemyWalk : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-walk');
    },
    enemyStay : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-stay');
    },

    enemyReady : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-ready');
    },

    enemyHit : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-hit');
        app.game.classList.add('game-hit');
    },
	
    enemyDown : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-down');
    },
    enemyDead : function() {
        app.clearAnimation();
        app.enemy.classList.add('enemy-' + app.randomEnemy + '-dead');
    },
    clearAnimation : function() {
        for(var j = 1; j < 6; j++) {
            app.enemy.classList.remove('enemy-' + j + '-walk');
            app.enemy.classList.remove('enemy-' + j + '-stay');
            app.enemy.classList.remove('enemy-' + j + '-ready');
            app.enemy.classList.remove('enemy-' + j + '-hit');
            app.enemy.classList.remove('enemy-' + j + '-down');
            app.enemy.classList.remove('enemy-' + j + '-dead');
            app.game.classList.remove('game-hit');
        }
    }
};