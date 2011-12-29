var loader = {
	
	//this is over size of assets.. in prod you dont want this hard codeing..
	size: 14,
	count: 0,
	ready: function(){ console.log('need a call back')},
	data: {},
	image_callback: function(event){
		 console.log('loading ' + event.target.name);
		var bitmap = new Bitmap(event.target);
		bitmap.name = event.target.name;
		loader.data[event.target.name] = bitmap;
		loader.count ++;
		if (loader.count == loader.size){
			console.log('ready!');
			loader.ready();
		}
	},
	load: function(){
		$.getJSON('assets.json', function(data){
			$.each(data, function(key,value){
				var image = new Image();
				image.name = key;
				image.src = value;
				image.onload = loader.image_callback;
			});
		});			
	}
}