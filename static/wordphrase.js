function valid(message, count, string){
  //Function compres a message with a string
  //returns 0 if they do not match
  //returns 1 if the match is incomplete but without error
  //returns 2 if the match is complete
  if(string.length>count*message.length){
    return 0 //Too many string characters causes a rejection
  }
  var it = Math.ceil(string.length/count)
  for(var i=0; i<it; i++){
    if(string[count*i]!=message[i]){
      return 0
    }
  }
  if(Math.ceil(string.length/count)==message.length){
    return 2
  }else{
    if(string.length%count==0){
      return 0
    }else{
      return 1
    }
  }
}


class Wordphrase{
  constructor(target, count){
    //defines a wordphrase object
    this.target = target
    this.count = count
    this.words = []
  }

  firstWord(){
  var can=[]
  var fin=[]
  for(var i=0; i<wordArray.length;i++){
    var word=wordArray[i]
    var v = valid(this.target, this.count, word)
    if(v==1){
      can.push(word)
    }else if(v==2){
      fin.push(word)
    }
  }
  return [can, fin]
}

  nextWord(){
  var can=[]
  var fin=[]
  for(var i=0; i<wordArray.length; i++){
    var word2 = wordArray[i]
    var v = valid(this.target, this.count, this.words.join(" ")+" "+word2)
    if(v==1){
      can.push(word2)
    }else if(v==2){
      fin.push(word2)
    }
  }
  return [can,fin]
  }
  
  nextWordSmart(){
    if(this.words.length == 0){
      return this.firstWord();
    }else{
      return this.nextWord()
    }
  }

  accept(word2){
    this.words.push(word2)
  }

  progress(){
    var counter = 0
    var c = 0
    while(counter<this.target.length){
      if(this.target[counter] == this.words.join(" ")[counter*this.count]){
        counter+=1
      }else{
        return counter
      }
    }
    return counter
  }

  prettyProgress(){
    var outstring = ""
    var unbold = this.words.join(" ")
    var c=0
    for(var i=0; i<unbold.length;i++){
      if(c==0){
        outstring+="<b>"+unbold[i]+"</b>"
      }else{
        outstring+=unbold[i]
      }
      c=(c+1)%this.count
    }
    return outstring
  }

}
