var canvas;
var stage;
var startContainer;
var gameContainer
var update = false;
var fading = false;
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
	update = true;
	Ticker.addListener(window);
	
}

function addIntro(image){
	var bit = new Bitmap(image);
	startContainer = new Container();
	stage.addChild(startContainer);
	startContainer.addChild(bit);
	
}

function addPlayButtons(){
	
	var playBit = getBitMap('./images/play-n.png');
	var x =  (canvas.width/2) - (playBit.image.width/2);	
	var y = 300;
	startContainer.addChild(playBit);
	playBit.x = x;
	playBit.y = y;

	var playHovverBit = getBitMap('./images/play-o.png');
	startContainer.addChild(playHovverBit);
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
	playHovverBit.onClick = function(event){
		startContainer.removeAllChildren();
		setupGame();
	}

	
	
}

function setupGame(){
	console.log('start game');
	gameContainer = new Container();
	stage.addChild(gameContainer);
	var image = new Image();
	image.src = './images/bg.jpg';	
	image.onload = startGame;
}


var scoreNum;
var progress;
function startGame(event){
	console.log('load game');
	gameContainer.addChild(new Bitmap(event.target));
	addMainCurtain();	
	addCurtain();
	addText(); 	
	update = true;
	
}

function addText(){
	console.log('adding Text');
	var score = new Text('Score:', 'bold 36px Arial', '#000000');
	gameContainer.addChild(score);
	update = true;	
}

function addMainCurtain(){
	var mainC = getBitMap('./images/mainCurtainBMP.png');
	gameContainer.addChild(mainC);
	mainC.y = -(canvas.height / 2);
}

function addCurtain(){
	var lCur = getBitMap('./images/leftCurtainBMP.png');
	var rCur = getBitMap('./images/rightCurtainBMP.png');
	gameContainer.addChild(lCur);
	gameContainer.addChild(rCur);
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
