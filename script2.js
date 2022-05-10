var turn = false;
var player_board;
var oppo_board;
var current_piece="undefined";
var current_cell ="undefined";

function StartGame(){


  player_board=document.getElementById("game-pieces-player");
  oppo_board=document.getElementById("game-pieces-oppo");
document.getElementById("q12").style.visibility="hidden";
player_board.style.visibility="visible";
//PickPiece();

}
function checkWin(){

var owner00 = document.getElementById("td00").getAttribute("owner");
var owner01 = document.getElementById("td01").getAttribute("owner");
var owner02 = document.getElementById("td02").getAttribute("owner");
var owner10 = document.getElementById("td10").getAttribute("owner");
var owner11 = document.getElementById("td11").getAttribute("owner");
var owner12 = document.getElementById("td12").getAttribute("owner");
var owner20 = document.getElementById("td20").getAttribute("owner");
var owner21 = document.getElementById("td21").getAttribute("owner");
var owner22 = document.getElementById("td22").getAttribute("owner");

if (owner00==owner01 && owner01==owner02) {
  console.log("wygrana#1");
document.getElementById("td00").style.backgroundColor="green";
document.getElementById("td01").style.backgroundColor="green";
document.getElementById("td02").style.backgroundColor="green";
return true;
}
if (owner10==owner11 && owner11==owner12)  {
  console.log("wygrana#2");
document.getElementById("td10").style.backgroundColor="green";
document.getElementById("td11").style.backgroundColor="green";
document.getElementById("td12").style.backgroundColor="green";
return true;
}
if (owner20==owner21 && owner21==owner22)  {
  console.log("wygrana#3");
document.getElementById("td20").style.backgroundColor="green";
document.getElementById("td21").style.backgroundColor="green";
document.getElementById("td22").style.backgroundColor="green";
return true;
}
if (owner00==owner10 && owner10==owner20)  {
  console.log("wygrana#4");
document.getElementById("td00").style.backgroundColor="green";
document.getElementById("td10").style.backgroundColor="green";
document.getElementById("td20").style.backgroundColor="green";
return true;
}
if (owner01==owner11 && owner11==owner21) {
  console.log("wygrana#5");
document.getElementById("td01").style.backgroundColor="green";
document.getElementById("td11").style.backgroundColor="green";
document.getElementById("td21").style.backgroundColor="green";
return true;
}
if (owner02==owner12 && owner12==owner22)  {
  console.log("wygrana#6");
document.getElementById("td02").style.backgroundColor="green";
document.getElementById("td12").style.backgroundColor="green";
document.getElementById("td22").style.backgroundColor="green";
return true;
}
if (owner00==owner11 && owner11==owner22)  {
  console.log("wygrana#7");
document.getElementById("td00").style.backgroundColor="green";
document.getElementById("td11").style.backgroundColor="green";
document.getElementById("td22").style.backgroundColor="green";
return true;
}
if (owner02==owner11 && owner11==owner20)  {
  console.log("wygrana#8");
document.getElementById("td02").style.backgroundColor="green";
document.getElementById("td11").style.backgroundColor="green";
document.getElementById("td20").style.backgroundColor="green";
return true;
}





}

function ChangeTurn(){
if (!turn){
  oppo_board.style.visibility="visible";
  player_board.style.visibility="hidden";

}
if (turn){
  oppo_board.style.visibility="hidden";
  player_board.style.visibility="visible";

}
turn=!turn;

}
function PickPiece(id){
  if (current_piece!="undefined") return;
  current_piece=id;
  document.getElementById(id).setAttribute("used","true");

}

function PutPiece(id){
  console.log(current_piece);
  var canPlay = true;
  if (current_piece!= "undefined") {console.log ("good! - chose piece");
    var size2 = document.getElementById(id);
    var size3 = size2.getAttribute("size");}
    else {canPlay = false;
console.log("wrong #1");
return}
    var size4 = document.getElementById(current_piece);
    var size5 = size4.getAttribute("size");

  if (size3 < size5) console.log ("good! - bigger");
else {
  canPlay=false;
  console.log("wrong #2");
}
  var el_id2 = size2.getAttribute("owner");
  var el_id3 = size4.getAttribute("owner");
  if (el_id2 != el_id3) console.log ("good! - different owner");

if (canPlay==true){
size2.setAttribute("size",size5);
size2.setAttribute("owner",el_id3);

if (size2.getAttribute("owner")=="o"){
  size2.innerHTML="X";
  var fontsize_= size2.getAttribute("size")*38;
  size2.style.fontSize = fontsize_+"px";
}

if (size2.getAttribute("owner")=="p"){
    size2.innerHTML="O";
    var fontsize_= size2.getAttribute("size")*38;
    size2.style.fontSize = fontsize_+"px";
  }


if (checkWin()){}
ChangeTurn();
current_piece="undefined";
}
}
