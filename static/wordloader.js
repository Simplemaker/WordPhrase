
wordArray = ""
function setWords(wordlist){ //define file handler
  wordArray = wordlist.split("\n");
}
loadUrl("words.txt", setWords)

//Ajax loading function from 
//https://www.w3schools.com/js/js_ajax_intro.asp
//Slight modifications were made
//The following code should not be considered my
//own original work.

function loadUrl(filename, handler) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     handler(this.responseText);
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}
