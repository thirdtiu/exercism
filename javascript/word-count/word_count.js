function words(yourString){
    var REGEX = /\s+/g;
    var obj = {};
    //remove multiple spaces, and replace with 1 space only
    //yourString = yourString.replace(/  +/g, ' ');
    //remove trailing spaces
    yourString = yourString.trim();

    yourString.split(REGEX).forEach(function(el, i, arr){
        obj[el] = obj.hasOwnProperty(el) ? ++obj[el]: 1;
    });
    console.log(obj);
    return obj;
}
// words('hello toString world');

module.exports = words;