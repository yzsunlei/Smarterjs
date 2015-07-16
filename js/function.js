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

//�����������¼���
function addEvent(obj, type, fn) {
	if (typeof obj.addEventListener != 'undefined') {
		obj.addEventListener(type, fn, false);
	} else {
		//����һ������¼��Ĺ�ϣ��(ɢ�б�)
		if (!obj.events) obj.events = {};
		//��һ��ִ��ʱִ��
		if (!obj.events[type]) {	
			//����һ������¼�������������
			obj.events[type] = [];
			//�ѵ�һ�ε��¼��������ȴ��浽��һ��λ����
			if (obj['on' + type]) obj.events[type][0] = fn;
		} else {
			//ͬһ��ע�ắ���������Σ�����ӵ���������
			if (addEvent.equal(obj.events[type], fn)) return false;
		}
		//�ӵڶ��ο�ʼ�������¼����������洢
		obj.events[type][addEvent.ID++] = fn;
		//ִ���¼�������
		obj['on' + type] = addEvent.exec;
	}
}

//Ϊÿ���¼�����һ��������
addEvent.ID = 1;

//ִ���¼�������
addEvent.exec = function (event) {
	var e = event || addEvent.fixEvent(window.event);
	var es = this.events[e.type];
	for (var i in es) {
		es[i].call(this, e);
	}
};

//ͬһ��ע�ắ����������
addEvent.equal = function (es, fn) {
	for (var i in es) {
		if (es[i] == fn) return true;
	}
	return false;
}

//��IE���õ�Event������Ե�W3C��ȥ
addEvent.fixEvent = function (event) {
	event.preventDefault = addEvent.fixEvent.preventDefault;
	event.stopPropagation = addEvent.fixEvent.stopPropagation;
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
		for (var i in obj.events[type]) {
			if (obj.events[type][i] == fn) {
				delete obj.events[type][i];
			}
		}
	}
}

//ɾ�����ҿո�
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,'');
}

//����������
function scrollTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

/* //��������ͼ�⣬�����ü�д
(function(){
    window.sys = {};
    var ua = navigator.userAgent.toLowerCase();//��ȡ�������Ϣ�ַ���
    var s;
    
    //alert(ua);
    if((/msie ([\d.]+)/).test(ua)){
        s = ua.match(/msie ([\d.]+)/);
        alert(s);
    }
    if((/firefox\/([\d.]+)/).test(ua)){
        s = ua.match(/firefox\/([\d.]+)/);
        alert(s);
    }
    if((/chrome\/([\d.]+)/).test(ua)){
        s = ua.match(/chrome\/([\d.]+)/);
        alert(s);
    }
    if((/opera\/.*version\/([\d.]+)/).test(ua)){
        s = ua.match(/opera\/.*version\/([\d.]+)/);
        alert(s);
    }
    if((/version\/([\d.]+).*safari/).test(ua)){
        s = ua.match(/version\/([\d.]+).*safari/);
        alert(s);
    }
    
})();

 */

//��������Լ��
(function(){
    window.sys = {};
    //��ȡ�������Ϣ�ַ���
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s=ua.match(/msie ([\d.]+)/))?sys.ie = s[1]:
    (s=ua.match(/firefox\/([\d.]+)/))?sys.firefox = s[1]:
    (s=ua.match(/chrome\/([\d.]+)/))?sys.chrome = s[1]:
    (s=ua.match(/opera\/.*version\/([\d.]+)/))?sys.opera = s[1]:
    (s=ua.match(/version\/([\d.]+).*safari/))?sys.safari = s[1]:0;
})();








