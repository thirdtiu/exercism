var BigInt = require('./big_integer');
function Grains(){
    
    this.square = function(numberOfSquares){
        var result;
        if (numberOfSquares === 1){
            return  "1";
        } else {
            result = BigInt(2).pow(numberOfSquares-1);
            return result.toString();
        }
    }
    this.total = function(){
        var total = BigInt();
        for (var i = 1; i <= 64; i++){
            if (i == 1){
                total += i;
            } else{
                total = BigInt(total).add(BigInt(2).pow(i-1));
            }
        }
        return total.toString();
    }
}

module.exports = Grains;