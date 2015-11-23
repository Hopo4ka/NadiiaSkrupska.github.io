function Article() {
    this.created = new Date();

    Article.count++;
    Article.last = this.created;
}

Article.count = 0;

Article.showStats = function (){
    alert ('Total: ' + this.count + ', Last was: ' + this.last);
};

new Article();
new Article();

Article.showStats(); // ?????: 2, ?????????: (????)

new Article();

Article.showStats(); // ?????: 3, ?????????: (????)