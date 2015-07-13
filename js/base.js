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









