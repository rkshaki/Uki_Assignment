function myfunction(){
  let x= document.forms["add"]["tvshow"].value;
  let text;
  if( x < 1 || x > 10){
    text="Invalid TV Show name";
  }else{
    text= document.forms["add"]["tvshow"].value +" has been added";
  }
document.getElementById("output").innerHTML=text;
}
