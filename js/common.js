function Common() {
	this.dimensions = {width:1366, height:768};
	this.aspectRatio = this.dimensions.width / this.dimensions.height;
	this.resize = function (){	
		var w,h;
		if (window.innerWidth < window.innerHeight * this.aspectRatio){
			w = window.innerWidth;
			h = w / this.aspectRatio;
		}
		else {
			h = window.innerHeight;
			w = h * this.aspectRatio;
		}
		this.resizeTarget.style.height = h;
		this.resizeTarget.style.width = w;
		this.resizeTarget.style.marginLeft = (window.innerWidth - w) / 2;
		this.resizeTarget.style.marginTop = (window.innerHeight - h) / 2;
	};
	
	this.resizeWithWindow = function(target){
		var re = this;
		this.resizeTarget = target;		
		window.onresize = function(){re.resize.call(re)};
		this.resize();
	}
}

var common = new Common();