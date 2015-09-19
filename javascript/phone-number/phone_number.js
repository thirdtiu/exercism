String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};

var PhoneNumber = function(yourNumber){
    var REGEX = /\D+/g;
    var number = yourNumber.replace(REGEX, '');

    this.number = function(){
        // get first digit
        var firstDigit = number.toString()[0];
        if (number.toString().length == 10){
            return number;
        } else if (number.toString().length == 11 && parseInt(firstDigit) == 1){
            number = number.toString();
            number = number.slice(1);
        }
        else{
            number = '0000000000';
        }
        return number;
    }
    this.areaCode = function(){
        number = number.toString();
        number = number.substring(0,3);
        return number;
    }
    this.toString = function(){
        number = this.number()
        number = number.insert(0, "(");
        number = number.insert(4, ") ");
        number = number.insert(9, "-");
        return number;
    }
}

module.exports = PhoneNumber;