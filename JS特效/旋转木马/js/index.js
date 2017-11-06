/**
 * Created by Administrator on 2017/10/8.
 */
window.onload = function () {
    //需求：点击足有按钮实现旋转木马。
    //原理：点击右侧按钮，让3号盒子的样式赋值给2号盒子，然后2->1,1->5,5->4,4->3。。。
    //左侧同理。
    //步骤：
    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    //2.让页面加载出所有的盒子的样式。
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    //4.书写函数。
    // (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
    // (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)

    //数组
    var json = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            z:2
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var aArr = arrow.children;
    //开闭原则，来限制点击按钮旋转图片（点击一次旋转一次）
    var flag = true;
    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseenter = function () {
            animate(arrow,{"opacity":100});
    }
    slide.onmouseleave = function () {
        animate(arrow,{"opacity":0})
    }
    //2.让页面加载出所有的盒子的样式。
    ////for循环为每个li标签绑定属性
    //for(var i=0;i<liArr.length;i++){
    //    animate(liArr[i],{
    //        "width":json[i].width,
    //        "top":json[i].top,
    //        "left":json[i].left,
    //        "opacity":json[i].opacity,
    //        "zIndex":json[i].z
    //    });
    //}
    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    //使用for..in绑定事件
    //for(var k in aArr){
    //    //当参数为true时  为右侧按钮
    //    aArr[k].onclick = function () {
    //        if(this.className === "next"){
    //            if(flag === true){
    //                flag = false;
    //                move(true);
    //                //点击一次立刻修改为false，这样儿别人就不能在点击。（点击也不执行move()）
    //            }
    //        }else{
    //            if(flag){
    //                flag = false;
    //                move(false);
    //            }
    //        }
    //    }
    //}
    //绑定事件
    //右侧
    aArr[0].onclick = function () {
        if(flag === true){
            flag = false;
            move(true);
        }
    }
    //左侧
    aArr[1].onclick = function () {
        if(flag === true){
            flag = false;
            move(false);
        }
    }
    //4.书写函数。
    function move(bool){
        //json.push();  //在数组最后添加元素
        //json.pop();  //删除数组最后一个元素
        //json.unshift(); //在数组最开始添加元素
        //json.shift(); //删除数组的第一个元素
        if(bool === true || bool === false) {
            if (bool) {
                // (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
                json.push(json.shift());
            } else {
                // (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)
                json.unshift(json.pop());
            }
        }
        //在数组改变之后重新给li元素绑定属性和值
        for(var i=0;i<liArr.length;i++){
            //利用animate()框架让指定的属性，缓慢运动到指定位置。

            //代码优化
            //animate(liArr[i],json[i], function () {
            //    flag = true;
            //});
            animate(liArr[i],{
                "width":json[i].width,  //第一个li，必须对应第一个数组元素中的第一个的指定属性
                "top":json[i].top,
                "left":json[i].left,
                "opacity":json[i].opacity,
                "zIndex":json[i].z
            }, function () {
                //回调函数，所有程序执行完毕，在初始化flag的值为true
                flag = true;
            });
        }
    }

}