var assets;
var canvas;
var stage;
var startContainer;
var gameContainer
var update = false;
var fading = false;
function set_stage(){
	Ticker.addListener(window);
	canvas = $("#testCanvas")[0];	
	stage = new Stage(canvas);	
	stage.enableMouseOver(10);
}

function game_intro(){
	var bit = assets.introBMP;
	addIntro(bit);
	//update canvas width to image width
	canvas.width = bit.image.width;
	canvas.height = bit.image.height;
	update = true;
	
}

function addIntro(bit){
	startContainer = new Container();
	stage.addChild(startContainer);
	startContainer.addChild(bit);
}

function addPlayButtons(){
	
	var playBit = assets.playn;
	var x =  (canvas.width/2) - (playBit.image.width/2);	
	var y = 300;
	startContainer.addChild(playBit);
	playBit.x = x;
	playBit.y = y;

	var playHovverBit = assets.playo;
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
		startGame();
	}

	
	
}

// function setupGame(){
// 	console.log('start game');
// 	gameContainer = new Container();
// 	stage.addChild(gameContainer);
// 	var image = new Image();
// 	image.src = './images/bg.jpg';	
// 	image.onload = startGame;
// }


var scoreNum;
var progress;
function startGame(){
	console.log('load game');
	gameContainer = new Container();
	stage.addChild(gameContainer);
	gameContainer.addChild(assets.bg);
	addMainCurtain();	
	addCurtain();
	addText(); 	
	update = true;
	
}

function addText(){
	console.log('adding Text');
	var score = new Text('Score:', 'bold 20px GROBOLD', '#ffffff');
	gameContainer.addChild(score);
	score.x = 15;
	score.y = 20;

	var scoreNum = new Text('0', 'bold 20px GROBOLD', '#ffffff');
	gameContainer.addChild(scoreNum);
	scoreNum.x = 20;
	scoreNum.y = 40;
	 

	update = true;	
}

function addMainCurtain(){
	var mainC = assets.mainCurtainBMP;
	gameContainer.addChild(mainC);
	mainC.y = -(canvas.height / 2);
}

function addCurtain(){
	var lCur = assets.leftCurtainBMP;
	var rCur = assets.rightCurtainBMP;
	gameContainer.addChild(lCur);
	gameContainer.addChild(rCur);
	lCur.x = 0;
	lCur.y = 0;
	rCur.x = canvas.width - rCur.image.width;
	rCur.y = 0;
		
	
}

function tick() {
	// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
	if (update) {
		update = false; // only update once
		stage.update();
	}

}

$(function(){
	loader.ready = function(){
		assets = loader.data;
		set_stage();
		game_intro();
		addPlayButtons();
		
	};
	loader.load();
});
