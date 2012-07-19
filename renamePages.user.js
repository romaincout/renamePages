// ==UserScript==
// @name          My Script
// @namespace     romain
// @description Allows page title to be renamed (and saved across sessions) according to a regex on URL (order is important)
// @include       *
// @version       1.0
// ==/UserScript==

var hashTable = {
"https://google": "GOOGLE",
};

for (var key in hashTable){
    patt=new RegExp(key,"g");
    if(patt.test(document.URL)){
        document.title = hashTable[key];
        break;
    }
}
