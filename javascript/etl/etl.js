function transform(obj){
    var output = {};
    //extract the number or the score part of the object
    Object.keys(obj).forEach(function(val){
        var objVal = +val;
        //extract the character
        obj[val].forEach(function(character){
            output[character.toLowerCase()] = objVal;
        });
    })
    console.log(output);
    return output;
}

module.exports = transform;