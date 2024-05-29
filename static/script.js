

function toggleDiv(dname){
  var d  = document.getElementById(dname);
  if(d.style.display==""){
    d.style.display="none";
  }else{
    d.style.display="";
  }
}



target = ""
acceptedWords = []
function acceptTarget(){
  var t = document.getElementById("target").value
  target = t.toLowerCase();
  var c = document.getElementById("count").value
  count = parseInt(c)
  document.getElementById("pinvalid").innerHTML = target
  toggleDiv("targetSelection")
  toggleDiv("phraseGen")
  wp = new Wordphrase(target, count)
  updateGui()
}

function newTarget(){
  document.getElementById("target").value = ""
  toggleDiv("targetSelection")
  toggleDiv("phraseGen")
}

function updateGui(){
  //update progress indicator
  var p = wp.progress()
  document.getElementById("pvalid").innerHTML = wp.target.slice(0,p)
  document.getElementById("pinvalid").innerHTML =wp.target.slice(p,wp.target.length)
  
  //update current phrase
  document.getElementById("currentphrase").innerHTML = wp.prettyProgress()
  
  //update word counter
  document.getElementById("wordCount").innerHTML = wp.words.length;

  //update buttons with nextwords
  var a = wp.nextWordSmart()
  var b = document.getElementById('buttonbay')
  b.innerHTML = ""
  if(wp.words.length==0){
    b.innerHTML = "<p>Select a starting word:</p>"
  }
  for(var i=0; i<a[0].length;i++){
    b.innerHTML +=buttonGen(a[0][i])
  }
  if(a[1].length > 0){
    b.innerHTML += "<p>Words to complete the phrase:</p>"
    for(var i=0; i<a[1].length;i++){
    b.innerHTML +=buttonGen(a[1][i])
   }
  }
  if(wp.progress() == wp.target.length){
    b.innerHTML = "<p>Phrase complete!</p>"
  }
}

function undoWord(){
  if(wp.words.length>0){wp.words.pop();updateGui();}
}

function buttonGen(word){
  return "<button onclick=\"wp.accept('"+word+"');updateGui();\">"+word+"</button>"
} 

$("#target").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#targetbutton").click();
    }
});