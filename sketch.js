function setup() {
  createCanvas(1280, 854);
  img=loadImage("data/1.jpg")
}

function draw() {
  //background(220);

  for(let x=0; x<width; x+=10){
    for(let y=0; y<height; y+=10){
      let clr= img.get(x,y)
      stroke(clr)
      line(x+random(-10,10), y+random(-10, 10),x+random(-10,10),y+random(-10, 10) )
    }
  }
}
