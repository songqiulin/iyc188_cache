function checkadd(){
if(document.frmA.k.value=="")
{
document.frmA.k.focus();
return false;}
}


var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

function goscroll(sid,tds){

$('html, body').animate({scrollTop: $(sid).offset().top}, 1000);
}



    $(document).ready(function () {

            var mmm  = $(document).width();

/* 产品介绍 开始*/
        $('.up_pop').click(function () {
            $('.bgpop,.up_pop,.content_gx').hide();
            $(".up_pop .content_gx").css("display","block");
            /*$('html,body').removeClass('ovfHiden');*/

        });

        $('.news_box li').click(function () {
            var mmm2 = $(".up_pop").width();

            var tit = $(".news_box li b").html();
            /*_czc.push(['_trackEvent',tit, '点击','0']);*/


            if(mmm>"600"){var upli="570";}else{var upli=Math.round(mmm-30)+"";}
            leftMargin="-"+Math.round(upli/2)+"px";
            $(".up_pop").css("width",upli+"px");

            topMargin="-"+Math.round($(".up_pop").height()/2)+"px";

            var topm=$(window).height()-$(window).height()*0.21+"px";var topm="auto";
            $(".up_pop").html("<span class='pop-close'><span class='close'></span></span><li style='width:calc(100% - 32px);height:"+topm+";'>"+$(this).html() +"</li>  ");

            $(".up_pop .content_gx").css("display","block");
            $(".up_pop,.bgpop").show();
            $(".up_pop").css("margin-left",leftMargin);
            /*$(".up_pop").css("margin-top",topMargin);*/
            /*$('html,body').addClass('ovfHiden'); */
            _hmt.push(['_trackEvent', tit, '点击', '0','0']);

        });
/* 产品介绍 结束*/
        $('.gobaojia').click(function () {goscroll("#baojia","top");});
        $('.gohuodong').click(function () {goscroll("#huodong","top");});
/* 快递查询 开始*/

        $('.ant-btn').click(function () {
            $('.combox,.bgpop,.content_gx').hide();
            $('article,header,footer').show();
        });


        $('.gokuaidi').click(function () {
            $('article,header,footer').hide();

            $('.combox,.bgpop,.content_gx').show();
            leftMargin="-"+Math.round($('.combox').width()/2-0)+"px";
            $(".combox").css("margin-left",leftMargin);
/*
            var hhh = $(window).height();
            var thhh=hhh-hhh*0.14;
            $(".combox").css("height",thhh+"px");
            $(".timebox").css("height",thhh-160+"px");
*/
            $("#comnum").html("只支持邮政快递包裹");
            $("#timebox").html('<div style="text-align:center;position: absolute;width:90%;height:200px;left:0%;top:50%; margin-left:0px;margin-top:-100px;"><form name="frmA" action="" class="parent" onSubmit="return checkadd()"><input type="text" class="search" name="k" placeholder="输入邮政快递单号"><input type="submit" name="" id="btnsto" class="btns" value="查 询" ></form></div>');
        

        });

var comcode=$_GET['k'];
if(comcode == null){ var a=""; }else{
if(comcode.length == "15" || comcode.length == "13"){
$('article,header,footer').hide();
$(".combox,.bgpop").show();
leftMargin="-"+Math.round($('.combox').width()/2-0)+"px";
$(".combox").css("margin-left",leftMargin);
$("#comnum").html("邮政快递包裹  单号："+comcode);
$("#timebox").append("<iframe src=\"https://m.kuaidi100.com/app/query/?com=youzhengguonei&nu="+comcode+"&coname=meizu\" width=\"100%\" height=\"408\" frameborder=\"0\" scrolling=\"yes\" align=\"left\"></iframe>");
$("title").html("快递查询："+comcode+"  玉蓉方产品价格表 全国招代理");
$('#kuaidichaxun').hide();
}else{
alert("错误快递单号");
}


}




/* 快递查询 结束*/
    });
