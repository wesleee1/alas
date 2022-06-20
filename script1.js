
function textToBin(){
  var start = new Date().getTime();

  var text=document.getElementById("contents").value;
  var length = text.length,
      input = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    input.push(Array(8-bin.length+1).join("0") + bin);
  } 
    var input2 = input.join("");
    var myArray = [];
    var myArray2=[];
    for (var i = 0; i <input2.length/2 ; i++) {
      myArray[i] = input2.slice(2*i,2*i+2);
       if(myArray[i] == 00){
         myArray2[i]='A';
       } else if(myArray[i] == 01){
         myArray2[i]='C';
       }else if(myArray[i]== 11){
         myArray2[i]='G';
       }else if(myArray[i] == 10){
         myArray2[i]='T';
       }else{
         alert("invalid input!!");
       }
     }
     fianlarray=myArray2.join("");
     document.getElementById('decrypt').innerHTML = fianlarray;
     var end = new Date().getTime();
     var dur = end - start;
     console.log("The time taken to execute is "+dur)
   }