var cells =[];
var player=[];
var oppo=[];
var turn = false;
var player_board;
var oppo_board;
var current_piece="undefined";
var current_cell ="undefined";

function StartGame(){

  var cell00_h = document.getElementById('td00');
  cells.push(cell00_h);
  var cell01_h = document.getElementById('td01');
  cells.push(cell01_h);
  var cell02_h = document.getElementById('td02');
  cells.push(cell02_h);
  var cell10_h = document.getElementById('td10');
  cells.push(cell10_h);
  var cell11_h = document.getElementById('td11');
  cells.push(cell11_h);
  var cell12_h = document.getElementById('td12');
  cells.push(cell12_h);
  var cell20_h = document.getElementById('td20');
  cells.push(cell20_h);
  var cell21_h = document.getElementById('td21');
  cells.push(cell21_h);
  var cell22_h = document.getElementById('td22');
  cells.push(cell22_h);

  var play0_h = document.getElementById('p0');
  player.push(play0_h);
  var play1_h = document.getElementById('p1');
  player.push(play1_h);
  var play2_h = document.getElementById('p2');
  player.push(play2_h);
  var play3_h = document.getElementById('p3');
  player.push(play3_h);
  var play4_h = document.getElementById('p4');
  player.push(play4_h);
  var play5_h = document.getElementById('p5');
  player.push(play5_h);

  var play6_h = document.getElementById('p6');
  oppo.push(play6_h);
  var play7_h = document.getElementById('p7');
  oppo.push(play7_h);
  var play8_h = document.getElementById('p8');
  oppo.push(play8_h);
  var play9_h = document.getElementById('p9');
  oppo.push(play9_h);
  var play10_h = document.getElementById('p10');
  oppo.push(play10_h);
  var play11_h = document.getElementById('p11');
  oppo.push(play11_h);

  player_board=document.getElementById("game-pieces-player");
  oppo_board=document.getElementById("game-pieces-oppo");
oppo_board.style.visibility="hidden";


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

if (owner00==owner01 && owner01==owner02) console.log("wygrana");
if (owner10==owner11 && owner11==owner12) console.log("wygrana");
if (owner20==owner21 && owner21==owner22) console.log("wygrana");
if (owner00==owner10 && owner10==owner20) console.log("wygrana");
if (owner01==owner11 && owner11==owner21) console.log("wygrana");
if (owner02==owner01 && owner12==owner22) console.log("wygrana");
if (owner00==owner11 && owner11==owner22) console.log("wygrana");
if (owner02==owner11 && owner11==owner20) console.log("wygrana");





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
  current_piece=id;
}

function PutPiece(id){
  var canPlay = true;
  if (current_piece!= "undefined") {console.log ("good! - chose piece");
    var size2 = document.getElementById(id);
    var size3 = size2.getAttribute("size");}
    else {canPlay = false;
console.log("wrong #1");}
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
  size2.innerHTML="X";//+size2.getAttribute("size");
console.log("X planted");
}
if (size2.getAttribute("owner")=="p"){
    size2.innerHTML="O";//+size2.getAttribute("size");
    console.log("O planted");
  }
  current_piece==undefined;

checkWin();
ChangeTurn();
}
else {PickPiece()}
}
