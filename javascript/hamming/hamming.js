function compute(inputA, inputB){
    var  counter = 0;
    
    if (inputA.length == inputB.length){
        for (i = 0; i < inputA.length; i++){
            if (inputA.charAt(i) != inputB.charAt(i)){
                counter++;
            }
        }
    }
    else{
        throw 'DNA strands must be of equal length.';
    }

    return counter;
}
module.exports = compute;