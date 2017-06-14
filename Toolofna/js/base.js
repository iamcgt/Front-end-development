/**
 * Created by cgt on 2017/5/30.
 */
$(document).ready(function () {
    /**
     * nav
     */
    $("nav div a").each(function () {
        if(window.location.pathname.indexOf($(this).attr("href"))!=-1){
            $(this).css("transition","transform 0s");
            $(this).css("transform","rotateX(-90deg)");
        }
    });
    $("nav>div").css("left", function (i) {
            return i * 220;
        }
    );
    $("nav>div").click(function () {
        var href = $(this).children().eq(0).attr("href");
        $(window).attr("location", href);
    });
    $(".offices h1").css({"width": "306", "height": "205"});
    $(".offices h2").css("opacity", 1);
    $(".office-details").css("opacity", 1);
    $(".awards-header h2 span").css({"top": "33px", "opacity": "1"});
    $("#awards .awards-header ul li div").css("opacity", "1");
    // $("#awards-header-letter-3").css("top","320px").detach().css("top","320px")
    /**
     * awards
     */
    for (var i = 0; i < 10; i++) {
        $(".box").prepend(function () {
            var text = $(this).children().html();
            return "<span>" + text + "</span>";
        }).css("top", -300 * (i + 1) + "px").css({"transform": "translateY(3000px)", "opacity": "1"});
    }
    /**
     * directors
     */
    $(".line-in").css({"height": "100%", "background-color": "#000"});
    $(".left").css("width", "55%");
    $(".right").css("width", "55%");
    setTimeout(function () {
        $(".left-content").css({"display":"block"});
        $(".right-content").css({"display":"block"});
    },700);
    setTimeout(function () {
        $(".left-content").on("mouseover", function () {
            $(".left").css({"width": "0", "transition": "width .5s"});
            $(".right").css({"width": "50%", "transition": "width .2s"});
            $(this).css({"color":"#ffffff","left":"150px"});
            $(".left-content .redblock").css("width","50px");
            $(".left-content .blackblock").css({"width":"200px","background-color":"#e74c4c"});
        });
        $(".left-content").on("mouseout", function () {
            $(".left").css({"width": "55%", "transition": "width .2s"});
            $(".right").css({"width": "55%", "transition": "width .2s"});
            $(this).css({"color":"#000","left":"120px"});
            $(".left-content .redblock").css("width","17px");
            $(".left-content .blackblock").css({"width":"143px","background-color":"#2f2f2f"});
        });
        $(".right-content").on("mouseover", function () {
            $(".right").css({"width": "0", "transition": "width .5s"});
            $(".left").css({"width": "50%", "transition": "width .2s"});
            $(this).css({"color":"#ffffff","right":"150px"});
            $(".right-content .redblock").css("width","50px");
            $(".right-content .blackblock").css({"width":"200px","background-color":"#e74c4c"});
        });
        $(".right-content").on("mouseout", function () {
            $(".right").css({"width": "55%", "transition": "width .2s"});
            $(".left").css({"width": "55%", "transition": "width .2s"});
            $(this).css({"color":"#000","right":"120px"});
            $(".right-content .redblock").css("width","17px");
            $(".right-content .blackblock").css({"width":"143px","background-color":"#2f2f2f"});
        });
    },1000);
    /**
     * work
     */
    $("#work div").css({"transform":"rotateY(0)"});
    var length = $("#work div").first().width()/$("#work").width()*$(".scrollbar").width();
    $(".scrollbar div").css("width",length);
    var dis =0;
    if(window.location.pathname.indexOf("/Toolofna/work.html")){
        $(window).on("mousewheel",function(event){
            //监听滚轮的上下移动
            var value =  event.originalEvent.detail || event.originalEvent.wheelDelta;
            if(value>0){
                dis +=50;
            }else{
                dis-=50;
            }
            move(dis);
        });
    }

    function move(dis){
        $(".scrollbar div").css("left",dis);
        //实现联动
        var botton_total = $(".scrollbar").width()-$(".scrollbar div").width();
        var top_total = $("#work").width()-$(".scrollbar").width();
        var distance = (dis / botton_total)*top_total;
        $("#work").css("left",-distance);

        if($(".scrollbar div").position().left<0){
            $(".scrollbar div").css("left",0);
            $("#work").css("left",0);
        }
        if($(".scrollbar div").position().left>($(".scrollbar").width()-$(".scrollbar div").width())){
            $(".scrollbar div").css("left",($(".scrollbar").width()-$(".scrollbar div").width()));
            $("#work").css("left",-top_total);
        }
    }

    var down = false;
    $(".scrollbar").on("mousedown",function(){
        down = true;
    });
    $(document).on({
        "mouseup":function(){
            down = false;
        },
        "mousemove":function(event){
            if(down){
                //阻止鼠标默认事件
                event.stopPropagation();
                event.preventDefault();
                var x = event.clientX;
                var left = x - $(".scrollbar").offset().left-$(".scrollbar div").width()/2;
                move(left);
            }
        }
    });
});