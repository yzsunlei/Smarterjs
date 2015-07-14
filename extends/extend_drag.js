$().extend('drag',function(tags){
	for (var i = 0; i < this.elements.length; i ++) {
		addEvent(this.elements[i],'mousedown',function(e){
            if(trim(this.innerHTML).length == 0) e.preventDefault();
            var _this = this;
			var diffX = e.clientX - _this.offsetLeft;
			var diffY = e.clientY - _this.offsetTop;
            
            if(e.target.tagName == 'H2'){
                addEvent(document,'mousemove',move);
                addEvent(document,'mouseup',up);
            }else{
                removeEvent(document,'mousemove',move);
                removeEvent(document,'mouseup',up);
            }
            
            function move(e){
				var left = e.clientX - diffX;
				var top = e.clientY - diffY;
				
				if (left < 0) {
					left = 0;
				} else if (left > getInner().width - _this.offsetWidth) {
					left = getInner().width - _this.offsetWidth;
				}
				
				if (top < 0) {
					top = 0;
				} else if (top > getInner().height - _this.offsetHeight) {
					top = getInner().height - _this.offsetHeight;
				}
				
				_this.style.left = left + 'px';
				_this.style.top = top + 'px';
                
                if (typeof _this.setCapture != 'undefined') {
                    _this.setCapture();
                } 
            }
            
            function up(){
				removeEvent(document,'mousemove',move);
                removeEvent(document,'mouseup',up);
				this.onmouseup = null;
				if (typeof _this.releaseCapture != 'undefined') {
					_this.releaseCapture();
				}
            }
		});
	}
	return this;
})