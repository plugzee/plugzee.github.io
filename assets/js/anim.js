var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var i = 0;
var switchcase = true;


//All Image object declartion
var phone_plugzee = new Image();
var bluetooth = new Image();
var bluetooth2 = new Image();
var music = new Image();
var music_note_1 = new Image();
var music_note_2 = new Image();
var equaliser = new Image();

//Resource allocation

function init(){
	phone_plugzee.src = 'assets/images/animation/phone_plugzee.png';
	bluetooth.src = 'assets/images/animation/BT-icon.png';
	bluetooth2.src = 'assets/images/animation/BT-icon.png';
	music.src = 'assets/images/animation/music-icon.png';
	music_note_1.src = 'assets/images/animation/note1.png';
	music_note_2.src = 'assets/images/animation/note-2.png';
	equaliser.src = 'assets/images/animation/Equaliser.png';
	window.requestAnimationFrame(draw);
}


function draw(){
//Drawing the images
// ctx.save();
phone_plugzee.onload = function(){
	ctx.drawImage(phone_plugzee,100,100);
};
ctx.drawImage(phone_plugzee,100,100);

bluetooth.onload = function(){
	console.log("I reach here")
	drawImageRot(bluetooth,250,300,50,50,i);
	// ctx.restore();
};

drawImageRot(bluetooth,250,300,50,50,i);

bluetooth2.onload = function(){
	drawImageRot(bluetooth2,435,300,50,50,i);
};

drawImageRot(bluetooth2,435,300,50,50,i);


music.onload = function(){
	ctx.drawImage(music,150,225,50,50);
};

music_note_1.onload = function (){
	ctx.drawImage(music_note_1,300,300, 35 , 35);
};

music_note_2.onload = function (){
	ctx.drawImage(music_note_2,350,300, 25 , 31);
};

equaliser.onload = function(){
	ctx.drawImage(equaliser,400,100,100,100);
}
ctx.drawImage(equaliser,690,90,20,60);
ctx.drawImage(equaliser,710,90,20,60);
ctx.drawImage(equaliser,730,105,20,30);
ctx.drawImage(equaliser,750,90,20,60);
ctx.drawImage(equaliser,770,105,20,30);
ctx.drawImage(equaliser,790,90,20,60);

if (switchcase == true){
	if(i<30){
		i++;
	}
	else{
		switchcase = false;
	}
}
else if ( switchcase == false ){
	if (i > -30){
		i--;
	}
	else{
		switchcase = true;
	}
}

console.log(i);
setTimeout(function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	window.requestAnimationFrame(draw);

}, 20);

}
init();



function drawImageRot(img,x,y,width,height,deg){

    //Convert degrees to radian 
    var rad = deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    //reset the canvas  
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}