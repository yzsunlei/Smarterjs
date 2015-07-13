/* 函数式，对象式封装调试
window.onload = function(){
    alert(Base.getId('footer').innerHTML);
    alert(Base.getTag('div').length);
    alert(Base.getName('nav').length);
    alert($('footer').innerHTML);
}
 */
 
/* 连缀写法封装调试
window.onload = function(){
    $().getId('footer').css('color','red').html('smarterjs').click(function(){
        //alert(this.innerHTML);
        //alert($().getId('footer').html());//对html函数的进一步封装
        //alert($().getTag('footer').css('color'));//对css函数的进一步封装
        //alert($().getClass('imgtext-flow').css('color'));//封装getClass函数
        //alert($().getClass('imgtext-flow','imgtext').css('color'));//对getClass函数的进一步封装
        $().getClass('imgtext-flow').getElement(1).css('color','red');//增加选择器方法getElement
    });
}
 */