/*
 * @name Loop
 * @description The code inside the draw() function runs continuously from top 
 * to bottom until the program is stopped.
 */
var y = 120;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
  createCanvas(400, 500);  // Size must be the first statement
  stroke(0);     // Set line drawing color to white
  frameRate(300);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  background(234,31,58);   // Set the background to black
  y = y - 1; 
  if (y < 2) { 
    y = height; 
  } 
  stroke(234,31,58);
  fill(234,31,184);
  rect(0, y, width, y);  
  
  stroke(234,31,58);
  fill(234,226,128);
  rect(0, y, width, y/2);  
   
  stroke(234,31,58);
  fill(250,159,114);
  rect(0, y, width, y/4);  

} 

 mouseClicked();
 line(75,60,75,35);
