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
/* 
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
    //��̨��¼���������
    $().getClass('links-login').getElement(0).click(function(){
        $().getId('mask').lock();
        $().getId('link-login').center(400,180).show();
    });
    $().getClass('link-close').getElement(0).click(function(){
        $().getId('mask').unlock();
        $().getId('link-login').hide();
    });
    $().getId('link-login').center(400,180).resize(function(){
        $().getId('link-login').center(400,180);
    });
    $().getId('link-login').drag();
    //������ǩ���������
    $().getClass('links-insert').getElement(0).click(function(){
        $().getId('mask').lock();
        $().getId('link-book').center(400,180).show();
    });
    $().getClass('link-close').getElement(1).click(function(){
        $().getId('mask').unlock();
        $().getId('link-book').hide();
    });
    $().getId('link-book').center(400,180).resize(function(){
        $().getId('link-book').center(400,180);
    });
    $().getId('link-book').drag();
    
 */
    //alert($('#footer').html());
    //$('#footer').css('color','red').html('smarterjs');
    //$('.layout').css('background','red');
    //$('p').css('color','red');//����
    //$('#content').find('.section').css('color','red');
    //$('#article').find('p').css('color','red');
    //$('.section').find('p').css('color','green');
    
    //�����˵�����
    $('.links-me').hover(function(){
        $('.links-list').show();
    },function(){
        $('.links-list').hide();
    });
    //��̨��¼���������
    $('.links-login').click(function(){
        $('#mask').lock();
        $('#link-login').center(400,180).show();
    });
    $('.link-close').eq(0).click(function(){
        $('#mask').unlock();
        $('#link-login').hide();
    });
    $('#link-login').center(400,180).resize(function(){
        $('#link-login').center(400,180);
    });
    $('#link-login').drag();
    //������ǩ���������
    $('.links-insert').click(function(){
        $('#mask').lock();
        $('#link-book').center(400,180).show();
    });
    $('.link-close').eq(1).click(function(){
        $('#mask').unlock();
        $('#link-book').hide();
    });
    $('#link-book').center(400,180).resize(function(){
        $('#link-book').center(400,180);
    });
    $('#link-book').drag();
}

 
