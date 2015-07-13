/* 
//����ʽ
function $(id){
    return document.getElementById(id);
}
//����ʽ
var Base = {
    getId:function(id){
        return document.getElementById(id);
    },
    getTag:function(tag){
        //��ie6�����Ǹ���name�Ҷ���ʵ������ͨ��id�Ҷ���ģ���ff��ie7����ֱ��ͨ��name�ҵ�
        return document.getElementsByTagName(tag);
    },
    getName:function(name){
        return document.getElementsByName(name);
    }
}
 */

/*
//����ʽ����д��,ʵ����׺

//var a = function(){}
//��������
//var a = function(){}();
//����������ִ��

var $ = function(){
	return new Base();
}
function Base(){
    this.elements = [];//��ȡ�Ľڵ�����
    this.getId = function(id){//ͨ��ID��ȡ
        this.elements.push(document.getElementById(id));
        return this;
    }
    this.getTag = function(tag){//ͨ����ǩ����ȡ
        var tags = document.getElementsByTagName(tag);
        for(var i=0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }
        return this;
    }
    this.getName = function(name){//ͨ��Ԫ�����ƻ�ȡ
        var names = document.getElementsByName(name);
        for(var i=0;i<names.length;i++){
            this.elements.push(names[i]);
        }
        return this;
    }
    this.getClass = function(className,idName){//ͨ��Ԫ��������ȡ,ֻ�ܻ�ȡ������class="footer",���ܻ�ȡ��������class="layout footer"(���ض������)
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
            //getComputedStyle��firefox�еģ� currentStyle��ie�е�
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
        if(arguments.length == 0){ //û�д��Σ���������
            return this.elements[i].innerHTML;
        }else{                     //���Σ���������
            this.elements[i].innerHTML = str;
        }
    }
    return this;
}
 */

 
//�����ⶨ��--�����з�����������
function Base(oneElements){
    //��Ż�ȡ�Ľڵ�����
    this.elements = [];
    if(oneElements != undefined){
        this.elements[0] = oneElements;
    }
}
//�򻯵���
var $ = function(oneElements){
    return new Base(oneElements);
}
//ͨ��ID��ȡԪ��
Base.prototype.getId = function(id){
    this.elements.push(document.getElementById(id));
    return this;
}
//ͨ����ǩ����ȡԪ��
Base.prototype.getTag = function(tag){
    var tags = document.getElementsByTagName(tag);
    for(var i=0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }
    return this;
}
//ͨ��Ԫ�����ƻ�ȡԪ��
Base.prototype.getName = function(name){
    var names = document.getElementsByName(name);
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);
    }
    return this;
}
//ͨ��������ȡԪ��
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
//ͨ��Ԫ��������Ż�ȡ����Ԫ��
Base.prototype.getElement = function(num){
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
}
//��������������
Base.prototype.click = function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
//css���úͻ�ȡ����
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
//Ԫ���ڲ�HTML���úͻ�ȡ
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
//Ԫ���������
Base.prototype.addClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
}
//Ԫ���Ƴ�����
Base.prototype.removeClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
        }
    }
    return this;
}
//������ʾ
Base.prototype.show = function(className){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'block';
    }
    return this;
}
//��������
Base.prototype.hide = function(className){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
    }
    return this;
}
//������������Ƴ�
Base.prototype.hover = function(over,out){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}
//���ö���ˮƽ�ʹ�ֱ����
Base.prototype.center = function(width,height){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top = (document.documentElement.clientHeight - height)/2 + 'px';
        this.elements[i].style.left = (document.documentElement.clientWidth - width)/2 + 'px';
    }
    return this;
}
//��������ڴ�С�ı�
Base.prototype.resize = function(fn){
    window.onresize = fn;
    return this;
}
//��������
Base.prototype.lock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'block';
    }
    return this;
}
//����������
Base.prototype.unlock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
    }
    return this;
}



















