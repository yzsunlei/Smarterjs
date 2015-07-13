/* 
//函数式
function $(id){
    return document.getElementById(id);
}
//对象式
var Base = {
    getId:function(id){
        return document.getElementById(id);
    },
    getTag:function(tag){
        //在ie6中虽是根据name找对象但实际上是通过id找对象的，在ff和ie7中是直接通过name找的
        return document.getElementsByTagName(tag);
    },
    getName:function(name){
        return document.getElementsByName(name);
    }
}
 */

/*
//函数式对象写法,实现连缀

//var a = function(){}
//声明方法
//var a = function(){}();
//声明方法并执行

var $ = function(){
	return new Base();
}
function Base(){
    this.elements = [];//获取的节点数组
    this.getId = function(id){//通过ID获取
        this.elements.push(document.getElementById(id));
        return this;
    }
    this.getTag = function(tag){//通过标签名获取
        var tags = document.getElementsByTagName(tag);
        for(var i=0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }
        return this;
    }
    this.getName = function(name){//通过元素名称获取
        var names = document.getElementsByName(name);
        for(var i=0;i<names.length;i++){
            this.elements.push(names[i]);
        }
        return this;
    }
    this.getClass = function(className,idName){//通过元素类名获取,只能获取单名如class="footer",不能获取多名，如class="layout footer"(返回对象，奇怪)
        var node = null;
        if(arguments.length == 2){
            node = document.getElementById(idName);
        }else{
            node = document;
        }
        var all = node.getElementsByTagName('*');
        for(var i=0;i<all.length;i++){
            if(all[i].className == className){
                this.elements.push(all[i]);
            }
        }
        return this;
    }
    this.getElement = function(num){
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
    }
    
}

Base.prototype.click = function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
Base.prototype.css = function(attr,value){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 1){
            //getComputedStyle是firefox中的， currentStyle是ie中的
            if(typeof window.getComputedStyle != 'undefined'){
               return window.getComputedStyle(this.elements[i],null)[attr];
            }else if(typeof this.elements[i].currentStyle !='undefined'){
                return this.elements[i].currentStyle(attr);
            }
        }else{
            this.elements[i].style[attr] = value;    
        }
    }
    return this;
}
Base.prototype.html = function(str){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 0){ //没有传参，返回内容
            return this.elements[i].innerHTML;
        }else{                     //传参，设置内容
            this.elements[i].innerHTML = str;
        }
    }
    return this;
}
 */

 
//基础库定义--将所有方法置于外面
function Base(oneElements){
    //存放获取的节点数组
    this.elements = [];
    if(oneElements != undefined){
        this.elements[0] = oneElements;
    }
}
//简化调用
var $ = function(oneElements){
    return new Base(oneElements);
}
//通过ID获取元素
Base.prototype.getId = function(id){
    this.elements.push(document.getElementById(id));
    return this;
}
//通过标签名获取元素
Base.prototype.getTag = function(tag){
    var tags = document.getElementsByTagName(tag);
    for(var i=0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }
    return this;
}
//通过元素名称获取元素
Base.prototype.getName = function(name){
    var names = document.getElementsByName(name);
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);
    }
    return this;
}
//通过类名获取元素
Base.prototype.getClass = function(className,idName){
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idName);
    }else{
        node = document;
    }
    var all = node.getElementsByTagName('*');
    for(var i=0;i<all.length;i++){
        if(all[i].className == className){
            this.elements.push(all[i]);
        }
    }
    return this;
}
//通过元素数组序号获取单个元素
Base.prototype.getElement = function(num){
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
}
//鼠标左键单击方法
Base.prototype.click = function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
//css设置和获取方法
Base.prototype.css = function(attr,value){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 1){
            if(typeof window.getComputedStyle != 'undefined'){
                return window.getComputedStyle(this.elements[i],null)[attr];
            }else if(typeof this.elements[i].currentStyle !='undefined'){
                return this.elements[i].currentStyle(attr);
            }
        }else{
            this.elements[i].style[attr] = value;    
        }
    }
    return this;
}
//元素内部HTML设置和获取
Base.prototype.html = function(str){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 0){
            return this.elements[i].innerHTML;
        }else{
            this.elements[i].innerHTML = str;
        }
    }
    return this;
}
//元素添加类名
Base.prototype.addClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
}
//元素移除类名
Base.prototype.removeClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
        }
    }
    return this;
}
//设置显示
Base.prototype.show = function(className){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'block';
    }
    return this;
}
//设置隐藏
Base.prototype.hide = function(className){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
    }
    return this;
}
//设置鼠标移入移出
Base.prototype.hover = function(over,out){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}
//设置对象水平和垂直居中
Base.prototype.center = function(width,height){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top = (document.documentElement.clientHeight - height)/2 + 'px';
        this.elements[i].style.left = (document.documentElement.clientWidth - width)/2 + 'px';
    }
    return this;
}
//浏览器窗口大小改变
Base.prototype.resize = function(fn){
    window.onresize = fn;
    return this;
}
//锁屏方法
Base.prototype.lock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'block';
    }
    return this;
}
//解锁屏方法
Base.prototype.unlock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
    }
    return this;
}



















