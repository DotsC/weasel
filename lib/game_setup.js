var assets;
var canvas;
var stage;
var startContainer;

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

function tick() {
	// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
	if (update) {
		update = false; // only update once
		stage.update();
	}

}
