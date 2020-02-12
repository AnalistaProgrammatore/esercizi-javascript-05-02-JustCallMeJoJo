/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/


/*
for (let x=0; x<8; x++) {
  if (x%2==0) {
    console.log(" # # # #")}
  else console.log("# # # # ")}
*/


let size = 8;
let jojo = "";
for (let x=0; x<size; x++) {
  for (let y=0; y<size; y++) {
    if ((x+y)%2==0) {
      jojo += " "; }
    else {
      jojo += "#"; }
  }
  jojo += "\n"; }
console.log(jojo);


/*
console.log(" # # # #");
console.log("# # # # ");
console.log(" # # # #");
console.log("# # # # ");
console.log(" # # # #");
console.log("# # # # ");
console.log(" # # # #");
console.log("# # # # ");
*/
