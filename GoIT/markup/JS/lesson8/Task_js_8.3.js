function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties (this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            set: function(value) {
                return value + ' ' + this.lasName;
            }
        },
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },
            set: function(value) {
                return this.firstName + ' ' + value;
            }
        }
    });
}

var vasya = new User('????????? ??????');

// ?????? firstName/lastName
console.log( vasya.firstName ); // ?????????
console.log( vasya.lastName ); // ??????

// ?????? ? lastName
vasya.lastName = '???????';

console.log( vasya.fullName ); // ????????? ???????