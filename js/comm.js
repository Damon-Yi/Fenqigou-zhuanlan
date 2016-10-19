$(function(){
    /*展开、收起*/
    $('.main-txt .toggle-expand').on('click',function(){
        var parentTxt = $(this).parent();
        parentTxt.css('display','none');
        parentTxt.next('.main-txt-all').css('display','block');
    });
    $('.main-txt-all .toggle-expand').on('click',function(){
        var parentTxt = $(this).parent();
        parentTxt.css('display','none');
        parentTxt.prev('.main-txt').css('display','block');
    });

    /*分享操作*/
    $('.t-share,.li-share').on('click',function(){
        $('.share-area .s-cont').addClass('s-cont-show');
        $('.share-area .s-mask').addClass('s-mask-show');
    });
    $('.share-area .s-mask').on('click',function(){
        $('.share-area .s-cont').removeClass('s-cont-show');
        $('.share-area .s-mask').removeClass('s-mask-show');
    });
    var share1Swiper = new Swiper('.share-swiper-1', {
        freeMode : true,
        slidesPerView : 'auto',
        onClick: function(swiper){
        }
    });
    var share2Swiper = new Swiper('.share-swiper-2', {
        freeMode : true,
        slidesPerView : 'auto',
        onClick: function(swiper){
        }
    });
    
    /*态度*/
    $('.c-o-btns .a-wrap').on('click',function(){
        var parentLi = $(this).parent();
        var a_div = $(this).children('div');
        parentLi.siblings().removeClass('on');
        parentLi.toggleClass('on');
        a_div.addClass('a-bouncein');
        setTimeout(function(){
            a_div.removeClass('a-bouncein');
        },1000);
        //底部“态度”
        var bottomLi = $($('.f-o-btns>li').get(parentLi.index()));
        bottomLi.siblings().removeClass('on');
        bottomLi.toggleClass('on');
    });
    $('.f-o-btns>li').on('click',function(){
        var _that = $(this);
        _that.siblings().removeClass('on');
        _that.toggleClass('on');
        _that.addClass('a-bouncein');
        setTimeout(function(){
            _that.removeClass('a-bouncein');
        },1000);
        //内容中间“态度”
        var a_parentLi = $($('.c-o-btns>li').get($(this).index()));
        var a_div = a_parentLi.find('.a-wrap').children('div');
        a_parentLi.siblings().removeClass('on');
        a_parentLi.toggleClass('on');
        a_div.addClass('a-bouncein');
        setTimeout(function(){
            a_div.removeClass('a-bouncein');
        },1000);
    });
});
//滑动,底部效果
var bottomBtnhandle = function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var cHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    var bodyHeight = $('body').height();
    var oDiv = $('#show-taidu');
    if(scrollTop>(oDiv.offset().top-cHeight)){
        $('.f-o-btns').css('opacity','0');
        setTimeout(function(){
            $('.f-o-btns').addClass('f-o-btns-hide');
        },500);
    }else{
        $('.f-o-btns').removeClass('f-o-btns-hide');
        $('.f-o-btns').css('opacity','1');
        setTimeout(function(){
            $('.f-o-btns').removeClass('f-o-btns-hide');
        },500);
    }
    //最底部固定
    // if((scrollTop+cHeight)==bodyHeight){
    //     $('.f-operate').addClass('f-operate-show');
    //     $('.f-o-btns').removeClass('f-o-btns-show');
    // }else{
    //     $('.f-o-btns').addClass('f-o-btns-show');
    // }
}