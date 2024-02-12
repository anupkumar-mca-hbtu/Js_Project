
var count=0;
function CountMinus(){
    
    var collect= document.getElementById("root");
    
    if(count>0){
        count--;
    collect.innerHTML=count;
  }
  else {
    collect.innerHTML=0;
    document.getElementById("para").innerHTML="counter should be positive...";
  }
}
  function CountAdd(){
    
    var collect= document.getElementById("root");
    count++;
    collect.innerHTML=count;
    document.getElementById("para").innerHTML="";

  }
