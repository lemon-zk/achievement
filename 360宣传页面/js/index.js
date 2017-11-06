/**
 * Created by wcs on 2016/9/25.
 */
    //屏幕滚动事件
$(function(){
    $('#dowebok').fullpage({
        //设置每个页面的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //loopTop:true,  //滚到页面顶部回到页底
        // 滚动某一屏幕之后调用方法
        afterLoad:function(link,index){
            // index 指的是每个section的值（第几个section）
            // current类给谁  谁就设置动画
            $('.section').removeClass('current');
            // 为了让第一个页面动画延迟100ms显示
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });
});