function arrangeAlphabets(word){
    return word.split('').sort().join('');
}

function anagram(word){
    var origWord = word;
    word = word.toLowerCase()
    sortedOrigWord = arrangeAlphabets(word);

    function findMatch(arrayOfWords){
        var matches = [];        
        
        //if user input is string, make it an array
        if (typeof arrayOfWords === 'string') {
            arrayOfWords = [].slice.apply(arguments);
        }

        //iterate through the array
        for(i=0; i < arrayOfWords.length; i++){
            //sort potential anagram word
            var sortedPontentialWord = arrangeAlphabets(arrayOfWords[i].toLowerCase());
            //check first if original word and potential word is the same. if true, do not count as anagram
            if (origWord.toLowerCase() != arrayOfWords[i].toLowerCase()){
                
                if (sortedPontentialWord == sortedOrigWord){
                    matches.push(origPotentialWord);
                }
            }
        }
        return matches;

    }
    return {
        matches: findMatch
    };
}

module.exports = anagram;