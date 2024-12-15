const prompt = require("prompt-sync")();

let type = prompt("Enter color type : ");
let count = prompt("Enter number of colors : ");
generateColors(type , count);

function generateColors(type , count) {
  if (type === "hexa") {
    console.log(arrayOfHexaColors(count)); 
  }
  else{
    console.log(arrayOfRgbColors(count)); 
  }
}
function arrayOfRgbColors(count){
  rgbcolours = [];
  for (i = 0; i < count; i++ ){
    rgbcolours.push(`rgb(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)})`);
}
  return rgbcolours;
}

function arrayOfHexaColors(count){
  hexacolours = [];
  for (i = 0; i < count; i++ ){
    hexacolours.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  }
  return hexacolours;
}