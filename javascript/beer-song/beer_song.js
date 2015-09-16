String.prototype.trim = function() {
    return this.replace(/\n$/, '');
};

var Beer = {
    verse: function(verseNumber){
        var verseLyric = '';
        switch(verseNumber) {
            case 2:
                verseLyric = verseNumber + ' bottles of beer on the wall, ' + verseNumber + ' bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
                break;
            case 1:
                verseLyric = verseNumber + ' bottle of beer on the wall, ' + 1 + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
                break;
            case 0:
                verseLyric = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
                break;
            default:
                verseLyric = verseNumber + ' bottles of beer on the wall, ' + verseNumber + ' bottles of beer.\nTake one down and pass it around, ' + (verseNumber - 1)  + ' bottles of beer on the wall.\n'
        }

        return verseLyric;
    },
    sing: function(start, end){     
        var verseLyrics = '';
        end = end || 0;
        for (; start >= end; start--){
            verseLyrics += this.verse(start) + '\n';
        }
        verseLyrics = verseLyrics.trim();
        return verseLyrics;
    }

}

module.exports = Beer;