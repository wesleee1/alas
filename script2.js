function bin3(){	
      var c=0;
      var bin=[];
    	var str=document.getElementById("contents").value;
      for(var i=0;i<str.length;i++){
        if(c==4){
          c=0;
          bin=bin+" ";
        }
        if(str[i]=='A'){
            bin=bin+'00';
        }
        if(str[i]=='C'){
          bin=bin+'01';
        }
        if(str[i]=='G'){
          bin=bin+'11';
        }
        if(str[i]=='T'){
          bin=bin+'10';
        }
        c++;
      }
function binaryAgent(bin) {
      return bin.split(' ').map(letter=>String.fromCharCode(parseInt(letter, 2))).join(''); 
}   
    		document.getElementById("encrypt").innerHTML=binaryAgent(bin);	
}