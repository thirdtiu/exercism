function toRna(dnaString){
    
    var rna = '';
    
    for (i = 0; i < dnaString.length; i++) {
        
        if (dnaString.charAt(i) == 'C') {
            rna = rna + 'G';
        } else if (dnaString.charAt(i) == 'G'){
            rna = rna + 'C';
        } else if (dnaString.charAt(i) == 'A'){
            rna = rna + 'U';
        } else if (dnaString.charAt(i) == 'T'){
            rna = rna + 'A';
        }

    }
    
    return rna;
}

module.exports = toRna;