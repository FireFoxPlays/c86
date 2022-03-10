var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_image="";
var block_image="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image = Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;

        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}