var robots = {};

function generateRobotChar(){
    //generates 2 capital letters
    var robotCharLength = 2,
        robotChar = "";
    while( robotCharLength-- ) {
        //65 = A
        //26 = alphabets
        //double tilde as replacement for Math.floor http://rocha.la/JavaScript-bitwise-operators-in-practice
        robotChar += String.fromCharCode( 65 + ~~(Math.random() * 26) );
    }
    
    return robotChar;
}
function generateRobotDigits(){
    var robotDigitsLength = 3,
        robotDigits = "";

    while( robotDigitsLength-- ){
        robotDigits += Math.floor(Math.random() * 10);
    }
    
    return robotDigits;
}
function createName(){
    
    var robotName;
    do{
        robotName = generateRobotChar() + generateRobotDigits();
    } while (robots.hasOwnProperty(robotName));
    robots[robotName] = true;
    return robotName;
}
function Robot() {
    var name = createName();
    this.name = name;
    this.reset = function(){
        name = createName();
        this.name = name;
    };
}
module.exports = Robot;