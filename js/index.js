/* ����ʽ������ʽ��װ����
window.onload = function(){
    alert(Base.getId('footer').innerHTML);
    alert(Base.getTag('div').length);
    alert(Base.getName('nav').length);
    alert($('footer').innerHTML);
}
 */
 
/* ��׺д����װ����
window.onload = function(){
    $().getId('footer').css('color','red').html('smarterjs').click(function(){
        //alert(this.innerHTML);
        //alert($().getId('footer').html());//��html�����Ľ�һ����װ
        //alert($().getTag('footer').css('color'));//��css�����Ľ�һ����װ
        //alert($().getClass('imgtext-flow').css('color'));//��װgetClass����
        //alert($().getClass('imgtext-flow','imgtext').css('color'));//��getClass�����Ľ�һ����װ
        $().getClass('imgtext-flow').getElement(1).css('color','red');//����ѡ��������getElement
    });
}
 */