function setup(){
    canvas = createCanvas(400,400);
    canvas.position(500,250);
    img = createCapture(VIDEO);
    img.hide();
    filtercolor="";
}
function draw(){
    image(img,0,0,400,400);
    tint(filtercolor);
    fill("lightblue")
    circle(30,30,50,);
    circle(370,30,50);
    circle(30,370,50);
    circle(370,370,50);
    fill("orange")
    rect(60,10,280,30);
    rect(60,350,280,30);
    rect(15,60,30,280);
    rect(355,60,30,280);
    
}
function take_snapshot(){
    save('me.png');
}