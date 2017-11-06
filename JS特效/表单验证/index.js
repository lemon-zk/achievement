/**
 * Created by Administrator on 2017/10/9.
 */
window.onload = function () {
    //需求：当鼠标离开文本框输入框的时候，匹配输入的和设置的格式是否匹配

    //封装函数  获取id
    function $(id){
        return document.getElementById(id);
    }
    //封装验证函数
    function change(id,fn) {
        $(id).onblur = fn;   //  fn  函数的意思
    }
    //封装设置文字函数
    function setText(obj,txt) {
        //兼容性获取下一个节点
        var span = obj.nextElementSibling || obj.nextSibling;
        span.innerHTML = txt;
    }
    //封装设置类名函数
    function setClassName(obj,className) {
        //兼容性获取下一个节点
        var span = obj.nextElementSibling || obj.nextSibling;
        span.className = className;
    }

    //开始验证表单
    //验证QQ
    change("inp1", function () {
        if(/^[1-9][0-9]{4,}$/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
    //验证手机
    change("inp2", function () {
        if(/^(13\d{9})|(15\d{9})|(18\d{9})$/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
    //验证邮箱
    change("inp3", function () {
        //qq邮箱
        //if(/^[0-9]{9}\@[\w]{2}\.[\w]{3}$/.test(this.value)){
        if(/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
    //验证座机
    change("inp4", function () {
        //直辖市 三位-八位    普通市：四位-七位       都限制0开头
        if(/(^0\d{2}-\d{8}$)|(^0\d{3}-\d{7}$)/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
    //验证账号
    change("inp5", function () {
        if(/^[a-zA-Z0-9_$]{6,}$/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
    //验证密码
    change("inp6", function () {
        if(/^[a-zA-Z0-9_$]{6,15}$/.test(this.value)){
            setText(this,"输入正确");
            setClassName(this,"right");
            $("password").className = "pwd str1";
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/ .test(this.value)){
                //大小写  数字  特殊符号
                $("password").className = "pwd str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]/.test(this.value)){
                //大小写 加数字
                $("password").className = "pwd str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                //大小写
                $("password").className = "pwd str2";
            }
        }else{
            setText(this,"格式不对");
            setClassName(this,"wrong");
        }
    });
}