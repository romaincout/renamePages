// ==UserScript==
// @name          My Script
// @namespace     romain
// @description Allows page title to be renamed (TODO and saved across sessions) according to a regex on URL filter (thus order is important)
// @include       *
// @version       1.01
// ==/UserScript==

var hashTable = {
"https://[^/]*google": "GOOGLE",
};

for (var key in hashTable){
    patt=new RegExp(key);
    if(patt.test(document.URL)){
        document.title = hashTable[key];
        break;
    }
}
