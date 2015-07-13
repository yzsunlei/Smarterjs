//��ȡ������ӿڴ�С
function getInner(){
    if(typeof window.innerWidth != 'undefined'){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else{
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}

//��ȡstyle
function getStyle(element,attr){
    if(typeof window.getComputedStyle != 'undefined'){
        return window.getComputedStyle(element,null)[attr];
    }else if(typeof element.currentStyle != 'undefined'){
        return element.currentStyle[attr];
    }
}

//���link����
function insertRule(sheet,seletorText,cssText,position){
    if(typeof sheet.insertRule != 'undefined'){
        sheet.insertRule(selectorText + '{' + cssText + '}',position);
    }else if(typeof sheet.addRule != 'undefined'){
        sheet.addRule(selectorText,cssText,position);
    }
}

//�Ƴ�link����
function removeRule(sheet,index){
    if(typeof sheet.deleteRule != 'undefined'){
        sheet.deleteRule(index);
    }else if(typeof sheet.removeRule != 'undefined'){
        sheet.removeRule(index);
    }
}

//��ȡEvent����
function getEvent(event){
    return event||window.event;
}

//��ֹĬ����Ϊ
function preDef(event){
    var e = getEvent(event);
    if(typeof e.preventDefault != 'undefined'){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//����������
function scrollTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

/*  */


//�����������¼���
function addEvent(obj,type,fn){
    if(typeof obj.addEventListener != 'undefined'){
        obj.addEventListener(type,fn,false);
    }else{
        if(!obj.events) obj.events = {};
        if(!obj.events[type]){
            obj.events[type] = [];
            if(obj['on' + type]) obj.events[type][0] = fn;
        }else{
            if(addEvent.equal(obj.events[type],fn)) return false;
        }
        obj.events[type][addEvent.ID++] = fn;
        obj['on' + type] = addEvent.exec;
    }
}
//Ϊÿһ���¼�����һ��������
addEvent.ID = 1;
//ִ���¼�������
addEvent.exec = function(event){
    var e = event || addEvent.fixEvent(window.event);
    var es = this.events[e.type];
    for(var i in es){
        es[i].call(this,e);
    }
}
//ͬһ��ע�ắ����������
addEvent.equal = function(es,fn){
    for(var i in es){
        if(es[i] == fn) return true;
    }
    return false;
}
//��IE���õ�Event������Ե�W3C��ȥ
addEvent.fixEvent = function (event) {
	event.preventDefault = addEvent.fixEvent.preventDefault;
	event.stopPropagation = addEvent.fixEvent.stopPropagation;
	event.target = event.srcElement;
	return event;
};
//IE��ֹĬ����Ϊ
addEvent.fixEvent.preventDefault = function () {
    this.returnValue = false;
};
//IEȡ��ð��
addEvent.fixEvent.stopPropagation = function () {
	this.cancelBubble = true;
};

//�������ɾ���¼�
function removeEvent(obj, type, fn) {
	if (typeof obj.removeEventListener != 'undefined') {
		obj.removeEventListener(type, fn, false);
	} else {
		if (obj.events) {
			for (var i in obj.events[type]) {
				if (obj.events[type][i] == fn) {
					delete obj.events[type][i];
				}
			}
		}
	}
}

//ɾ�����ҿո�
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,'');
}




