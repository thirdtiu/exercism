/*
leap year:

    on every year that is evenly divisible by 4
      except every year that is evenly divisible by 100
        unless the year is also evenly divisible by 400
*/

function YearChecker(year){
    function isDivisibleByFour(){
        return year % 4 === 0;        
    }
    function isNotDivisibleByOneHundred(){
        return year % 100 !== 0;
    }
    function isDivisibleByFourHundred(){
        return year % 400 === 0;
    }
    this.is_leap_year = function(){
        return isDivisibleByFour() && isNotDivisibleByOneHundred() || isDivisibleByFourHundred();
    }
}

function is_leap_year(year){
    var x = new YearChecker(year).is_leap_year();
    console.log(x);
    return new YearChecker(year).is_leap_year();
}



module.exports = is_leap_year;
