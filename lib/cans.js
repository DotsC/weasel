var canvas;
var ctx;
var stage;
var container;
//Bryan: possible plan. For animation will use tween.js to move things about and then easel.js to shift capture these objects to be tween.
function init(){
	canvas = document.getElementById("testCanvas");	
	ctx = canvas.getContext("2d");
	stage = new Stage(canvas);	

	var image = new Image();
	image.onload = run;
	image.src = './images/introBMP.jpg'
	
}

function run(event){
	console.log('run');
	var bit = new Bitmap(event.target);
	bit.draw(ctx, true);
	container = new Container();
	stage.addChild(container);
	
	var playImg = new Image();
	playImg.src = './images/play-n.png';
	playImg.onload = loadPlay;
}

function loadPlay(event){
	console.log('run2');
	var playBit = new Bitmap(event.target);
	container.addChild(playBit);
	playBit.x = 100;	

}

