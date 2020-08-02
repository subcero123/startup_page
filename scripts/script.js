function kanji_rnd(kanji,meanings){
    var rnd = Kanji.random();    
    var str = '';
    document.getElementById(kanji).innerHTML = rnd.literal;
    //str = rnd.meanings;
    //str = str.replace(',', "|");
    for (var i=0; i<rnd.meanings.length;i++){
        str = str + rnd.meanings[i] + ' | ';
    }
    str = '| ' + str;
    document.getElementById(meanings).innerHTML = str;
}