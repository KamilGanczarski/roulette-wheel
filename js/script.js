//roulette wheel

var credits = 100; // Money given for start game
var winPkt = 0; // Credits give out for win
var correct = true;  // Bool to correct of input

let button = document.getElementsByClassName('button');
let output = document.getElementsByClassName('output');
let score = document.getElementsByClassName('score');

// Check possession of credits

let game = () => {

    if(credits <= 0) {
        correct = true;
        winPkt = 0;
        button[0].innerHTML = '<p class="btn btn-danger">Nie masz pieniędzy</p>';
    }
    else {
        correct = true;
        winPkt = 0;
        trueGame();
    }
}

let trueGame = () => {

    // Array to attribution color to specyfic number
    
    const colors = ['green','red','black','red','black','red','black','red','black','red','black','black','red','black','red','black','red','black','red','red','black','red','black','red','black','red','black','red','black','black','red','black','red','black','red','black','red'];


    // Generate radom number and definition of this number 

    class Number {
        constructor() {
            this.number = Math.ceil(Math.random()*36);
            this.type = this.checkNunber(this.number);
            this.color = this.checkColor(this.number);
            this.numberPart = this.checkNumberPart(this.number);
            this.true = 0;
        }

        checkNunber(n) {
            if(n%2 == 0) return 'even';
            else return 'uneven';
        }

        checkColor(n) {
            if(colors[n] == 'red') return 'red';
            if(colors[n] == 'black') return 'black';
        }

        checkNumberPart(n) {
            if(n > 0 && n<=18) return 'first';
            else return 'secound';
        }
    }

    // Create random number

    let random = new Number();

    // Writeout on page each definition of random number

    score[1].innerHTML = random.number;
    score[2].innerHTML = random.type;
    score[3].innerHTML = random.color;
    score[4].innerHTML = random.numberPart;
    score[5].innerHTML = credits + ' pln';


    // Get introduced value form page

    class YourBetClass {
        constructor(input) {
            this.bet = this.checkBet(input[0]);
            this.number = this.checkNumber(input[1]);
            this.type = this.checkType(input[2]);
            this.color = this.checkColor(input[3]);
            this.numberPart = this.checkNumberPart(input[4]);
            this.checkAll = 0;
            this.error;
        }

        checkBet(n) {
            if(credits >= n) {
            
                if(n == '' || n == null) {
                    correct = false;
                    return '<p class="text-danger">You didn\'t enter your bet</p>';
                }
                else return n;
            }
            else {
                correct = false;
                return '<p class="text-danger">You have not enough money</p>';
            }
        }

        checkNumber(n) {
            if(random.number == n) {
                winPkt += parseInt(this.bet) * 35;
                return n;
            }
            else if(n >= 1 && n <= 36) {
                winPkt -= parseInt(this.bet);
                return n;
            }
            else if(n == '' || n == null) return n;
            else {
                correct = false;
                return '<p class="text-danger">Wrong number</p>';
            }
        }

        checkType(n) {
            if(random.type == n) {
                winPkt += parseInt(this.bet);
                return n;
            }
            else if(n == '' || n == null) return n;
            else  {
                winPkt -= parseInt(this.bet);
                return n;
            }
        }

        checkColor(n) {
            if(random.color == n) {
                winPkt += parseInt(this.bet);
                return n;
            }
            else if(n == '' || n == null) return n;
            else {
                winPkt -= parseInt(this.bet);
                return n;
            }
        }

        checkNumberPart(n) {
            if(random.numberPart == n) {
                winPkt += parseInt(this.bet);
                return n;
            }
            else if(n == '' || n == null) return n;
            else {
                winPkt -= parseInt(this.bet);
                return n;
            }
        }
    }

    // An array for storing user data

    let input = [];
    for(i=0; i<=4; i++)
        input[i] = document.getElementsByClassName('input')[i].value;


    let yourBetObj = new YourBetClass(input);

    if(correct) {
        // Write out on page each definition of number set from user

        output[0].innerHTML = yourBetObj.bet;
        output[1].innerHTML = yourBetObj.number;
        output[2].innerHTML = yourBetObj.type;
        output[3].innerHTML = yourBetObj.color;
        output[4].innerHTML = yourBetObj.numberPart;

        credits += winPkt;

        score[5].innerHTML = credits + ' pln';

        
        for(i=0; i<=4; i++)
            document.getElementsByClassName('input')[i].value = '';
    }
    else {
        for(i=0; i<=4; i++) {
            document.getElementsByClassName('input')[i].value = '';
            score[i].innerHTML = '';
        }

        output[0].innerHTML = yourBetObj.bet;
        output[1].innerHTML = yourBetObj.number;
        output[2].innerHTML = yourBetObj.type;
        output[3].innerHTML = yourBetObj.color;
        output[4].innerHTML = yourBetObj.numberPart;
    }
}