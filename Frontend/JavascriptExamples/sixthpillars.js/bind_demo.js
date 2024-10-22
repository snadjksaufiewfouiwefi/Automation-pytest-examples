const player1 = {
    firstname: 'virat',
    lastname: 'kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function() {
        console.log(this.firstname, this.lastname,"comes at no.",this.numberToBat);
    }
}

const obj = function () {
    console.log(this.getDetails());
}

let x = obj.bind(player1);

x();
// you can use this as well for call function

/**const obj = function(x,y) {
 * console.log(x + y);
 * this.getDetails();
 * }
 * obj.call(player1, 2 , 45);
 *  */