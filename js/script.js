var app={
	init:function(){
		canvas.init();
	}
};
var canvas={
	canvas:false,
	context:false,
	init:function(){
		this.canvas	=document.getElementsByTagName('canvas')[0];
		this.context=this.canvas.getContext('2d');
	}
};
app.init();