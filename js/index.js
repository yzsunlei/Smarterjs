/* ����ʽ������ʽ��װ����
window.onload = function(){
    alert(Base.getId('footer').innerHTML);
    alert(Base.getTag('div').length);
    alert(Base.getName('nav').length);
    alert($('footer').innerHTML);
}
 */
 
/* ��׺д����װ���� */
window.onload = function(){
    $().getId('footer').css('color','red').html('smarterjs').click(function(){
        //alert(this.innerHTML);
        //alert($().getId('footer').html());//��html�����Ľ�һ����װ
        //alert($().getTag('footer').css('color'));//��css�����Ľ�һ����װ
        //alert($().getClass('imgtext-flow').css('color'));//��װgetClass����
        //alert($().getClass('imgtext-flow','imgtext').css('color'));//��getClass�����Ľ�һ����װ
        //$().getClass('imgtext-flow').getElement(1).css('color','red');//����ѡ��������getElement
        //$().getId('footer').css('background','green').addClass('test').removeClass('layout');//��װ��������������Ƴ���������
        
    });
    //�����˵�����
    $().getClass('links-me').getElement(0).hover(function(){
        $().getClass('links-list').show();
    },function(){
        $().getClass('links-list').hide();
    });
    //���������
    $().getClass('links-insert').getElement(0).click(function(){
        $().getId('mask').lock();
        $().getId('link-login').center(400,180).show();
    });
    $().getClass('link-close').getElement(0).click(function(){
        $().getId('mask').unlock();
        $().getId('link-login').center(400,180).hide();
    });
    $().getId('link-login').center(400,180).resize(function(){
        $().getId('link-login').center(400,180);
    });
}

 
