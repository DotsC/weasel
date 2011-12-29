var gameContainer
var update = false;
var fading = false;


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

$(function(){
	loader.ready = function(){
		assets = loader.data;
		set_stage();
		game_intro();
		addPlayButtons();
		
	};
	loader.load();
});
