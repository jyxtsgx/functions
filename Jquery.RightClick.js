/**
 * @description JQ右键点击事件
 * @author 未知
 */

//注册鼠标右键事件
$.fn.extend({
    //定义鼠标右键方法，接收一个函数参数
    "rightclick":function(fn){
        //调用这个方法后将禁止系统的右键菜单
        $(this).bind('contextmenu',function(e){
            return false;
        });
        //为这个对象绑定鼠标释放事件
        $(this).mouseup(function(e){
            //如果按下的是右键，则执行函数
            if(3 == e.which){
                fn(e);
            }
        });
    }
}); 