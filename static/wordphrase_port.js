//words are loaded into wordArray by wordloader.js
//this removes the need for a cut function or file call

//This is a transpilation of wordphrase.py

// def valid(message, count, string):
//   if len(string)>count*len(message):
//     return 0
//   it = int(ceil(len(string)/count)) ##optomized function
//   for i in range(it):
//     if string[count*i]!=message[i]:
//       return 0
//   if int(ceil(len(string)/count)) == len(message):
//     return 2
//   else:
//     if len(string)%count==0:
//       return 0
//     return 1

function valid(message, count, string){
  //Function compres a message with a string
  //returns 0 if they do not match
  //returns 1 if the match is incomplete but without error
  //returns 2 if the match is complete
  if(string.length>count*message.length){
    return 0 //Too many string characters causes a rejection
  }
  it = Math.ceil(string.length/count)
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

// def firstword(message,count):
//   fin=[]
//   for word in wordArray:
//     if valid(message,count,word)>0:
//       fin.append(word)
//   return fin

function firstWord(message, count){
  var fin = []
  for(var i=0; i<wordArray.length;i++){
    word=wordArray[i]
    if(valid(message,count,word)>0){
      fin.push(word)
    }
  }
  return fin
}

// def appendword(message, count, word1,dlm=' '):
//   can = []
//   fin = []
//   for word2 in wordArray:
//     v = valid(message, count, word1+dlm+word2)
//     if v==1:
//       can.append(word1+dlm+word2)
//     elif v==2:
//       fin.append(word1+dlm+word2)
//   return can,fin

function appendWord(message, count, word1, dlm=" "){
  var can=[]
  var fin=[]
  for(var i=0; i<wordArray.length; i++){
    var word2 = wordArray[i]
    var v = valid(message, count, word1+dlm+word2)
    if(v==1){
      can.push(word1+dlm+word2)
    }else if(v==2){
      fin.push(word1+dlm+word2)
    }
  }
  return [can,fin]
}

// def finscan(message, count, canwords):
//   for word1 in canwords:
//     can,fin = appendword(message, count, word1)
//     finscan(message,count,can)
//     for item in fin:
//       print(item)

function finScan(message, count, canwords){
  for(var i=0; i<canwords.length;i++){
    word1 = canwords[i]
    var t =  appendWord(message, count, word1)
    can = t[0]
    fin = t[1]
    finScan(message, count, can)
    for(var i2=0;i2<fin.length;i2++){
      console.log(fin[i2])
    }
  }
}