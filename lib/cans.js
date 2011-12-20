var canvas;
var stage;
var container;
var update = false;
function init(){
	canvas = document.getElementById("testCanvas");	
	stage = new Stage(canvas);	
	stage.enableMouseOver(10);

	var image = new Image();
	image.onload = run;
	image.src = './images/introBMP.jpg'
}

function run(event){
	console.log('run');
	//update canvas width to image width
	canvas.width = event.target.width;
	
	addIntro(event.target);
	addPlayButtons();
	addCurtain();
	update = true;
	Ticker.addListener(window);
	
}

function addIntro(image){
	var bit = new Bitmap(image);
	container = new Container();
	stage.addChild(container);
	container.addChild(bit);
	
}

function addPlayButtons(){
	
	var playBit = getBitMap('./images/play-n.png');
	var x =  (canvas.width/2) - (playBit.image.width/2);	
	var y = 300;
	container.addChild(playBit);
	playBit.x = x;
	playBit.y = y;

	var playHovverBit = getBitMap('./images/play-o.png');
	container.addChild(playHovverBit);
	playHovverBit.x = x;
	playHovverBit.y = y;
	playHovverBit.visible = false;

	playBit.onMouseOver = function(event){
		event.target.visible = false;
		playHovverBit.visible = true;
		update = true;
	}
	playHovverBit.onMouseOut = function(event){
	 		event.target.visible = false;
	 		playBit.visible = true;
	 		update = true;
	}
	playHovverBit.onPress = function(event){
		event.target.visible = false;
 		playBit.visible = true;
 		update = true;
	}
	
}

function addCurtain(){
	var lCur = getBitMap('./images/leftCurtainBMP.png');
	var rCur = getBitMap('./images/rightCurtainBMP.png');
	container.addChild(lCur);
	container.addChild(rCur);
	lCur.x = 0;
	lCur.y = 0;
	rCur.x = canvas.width - rCur.image.width;
	rCur.y = 0;
		
	
}

function getBitMap(path){
	var image = new Image();
	image.src = path
	return new Bitmap(image);
}

function tick() {
// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
if (update) {
update = false; // only update once
stage.update();
}
}
