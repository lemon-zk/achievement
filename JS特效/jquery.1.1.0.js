/**
 * 缓动动画     多个参数时
 * @param ele
 * @param json
 * @param fn
 */

//缓动动画
function animate(ele,json,fn){
    //使用定时器前先清除定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则清除定时器
        var bool = true;
        //使用for  in遍历json  进行变化
        for(var k in json){
            //获取当前位置   k:json的键        json[k]:值
            //getStyle()   获取的是字符串  使用parseInt()转换成数字
            var leader;
            //判断传进来的属性
            //默认正常的opacity值为1
            if(k === "opacity"){
                leader = getStyle(ele,k)*100 || 1;
            }else if(k === "zIndex"){
                ele.style.zIndex = json[k];
            }else {
                leader = parseInt(getStyle(ele,k)) || 0;
            }
            //获取步长
            var step = (json[k] - leader)/10;
            //二次处理步长
            step = step>0?Math.ceil(step):Math.floor(step);
            //改变大小位置
            leader = leader + step;
            if(k === "opacity"){
                ele.style[k] = leader/100;
                //兼容IE678
                ele.style.filter = "alpha(opacity="+leader+")";
            }else{
                ele.style[k] = leader + "px";
            }
            //判断目标位置和当前位置的差值与步长的大小
            if(json[k] !== leader){
                bool = false;
            }

        }
        //清除定时器
        if(bool){
            //当差值小于步长的时候，直接到达目标位置
//                for(var k in json){
//                    ele.style[k] = json[k] + "px";
//                }
            clearInterval(ele.timer);
            if(fn){
                animate(ele,fn);
            }
        }
    },25)
}
/**
 * 兼容方法获取元素样式
 * @param ele
 * @param attr
 * @returns {*}
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}
/**
 * 浏览器大小变化  client().width    client().height  浏览器宽高的值
 * @returns {*}
 */
function client() {
    //DTD约束
    if (window.innerHeight !== "undefined") {
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    } else {
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}
/**
 * 缓动动画封装（向上下移动）
 * @param ele
 * @param target
 */
function animateT(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },25);
}
/**
 * 缓动动画封装（向左右移动）
 * @param ele
 * @param target
 */
function animateL(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },25);
}
/**
 * Created by andy on 2015/12/8.
 */
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/**
 * Created by Lenovo on 2016/9/2.
 */
/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele) {
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for (var i = 0; i < arr.length; i++) {
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


