$(function(){
	$(".cases_sort .btn a").click(function(){

		$(".movearrow").show();
		var left = this.parentNode.offsetLeft;
		
		var index = $(".cases_sort .btn a").index(this);
		
		$(".result > div").hide();

		$(".result > div").eq(index).addClass("noborderB").show();
		
		$(".cases_sort .btn a").removeClass("active");
		$(this).addClass("active");
		
		move(index);
		
	});
	
	$(".cases .dropdown a").click(function(){
		var tab = $(this).attr("href");
		tab = /\#.+/.exec(tab);
		tab = tab.toString();
		tab = tab.substring(1);
		generator(tab);	
	});
	
	var url = document.location.toString();
	var url_arr = url.split("#");
	if( url_arr.length > 1 ){
	
		$(".result > div").show();
		generator( url_arr[1] );
		
	}else if( url_arr.length == 1 ){

		$(".movearrow").addClass("hide");
	}
	
	function generator(str){
		switch( str ){
			case "tab1":
				tab(0);
			break;
			
			case "tab2":
				tab(1);
			break;
			
			case "tab3":
				tab(2);
			break;
			
			case "tab4":
				tab(3);
			break;
		}
	}
	
	function tab(num){
		$(".movearrow").show();
		$(".cases_sort .btn a").removeClass("active");
		$(".btn li").eq(num).find("a").addClass("active");
		var left = $(".btn li").eq(num).find("a").get(0).parentNode.offsetLeft;		
		
		$(".result > div").hide();
		
		$(".result > div").eq(num).addClass("noborderB").show();
		
		move(num);
	}
	
	function move(index){
		var move_arrow = $(".movearrow").get(0)
			,bw = $(".tabs").width()
			,btnWidth = $('.btn li').width()
			,indexWidth = btnWidth * index
			,tw = $(".btn").width()
			,aw = $(".movearrow").width()
			,ml = (bw-tw) / 2;
			
		startMove(move_arrow,{"left":ml+(btnWidth-aw)/2-0.5+indexWidth});
	}
	
/**
	工具函数
**/
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		
		for(var attr in json)
		{
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//alert(iCur)
			//2.算速度
			var iSpeed=(json[attr]-iCur)/2;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测停止
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn();
			}
		}
	}, 50)
}
});