function setup() {
    createCanvas(1000, 1000);
    background(0, 0, 0);

}

function draw() {
    strokeWeight(0);
    
    translate(500, 500);
    fill(255, 255, 255);
    triangle(-250, 0, -250, -500, 0, 0);
  
    
    fill(2,2,2);
    rect(-500, -250, 1000, 250);

    fill(255, 255, 255);
    triangle(-250, 0, -500, 0, -250, -500);

    triangle(-250, -500, 250, -500, 0, 0);

    rotate(PI);
    fill(255, 255, 255);
    triangle(-250, 0, -250, -500, 0, 0);
 
    
    fill(2,2,2);
    rect(-500, -250, 1000, 250);

    fill(255, 255, 255);
    triangle(-250, 0, -500, 0, -250, -500);

    triangle(-250, -500, 250, -500, 0, 0);
    

 

}
