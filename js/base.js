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









