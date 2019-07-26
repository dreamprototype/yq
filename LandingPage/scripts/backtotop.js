$(function(){
	var btn=$("#gotopbtn")		//按钮
		,cont=$('#content')
		,win=$(window);		//窗口
	var cw=cont.width()	//cont宽度一半
		,gw=btn.width()
		,gh=btn.height()
		,wst=$(window).scrollTop();		//滚动条距离
		
	//首先将#gotopbtn隐藏,滚动条高于500
	if (wst<500){
		btn.hide();
	}else{
		btn.css('top',win.height()-200+wst)
		btn.fadeIn(500);
	}
	
	//计算#gotopbtn的right
	btn.css('right',(win.width()-cw)/2-15)
	
	//当滚动条的位置处于距顶部500像素以下时，跳转链接出现，否则消失
	win.resize(function(){
		btn.css('right',(win.width()-cont.width())/2-gw)
	}).scroll(function(){
		var wh=win.height()
			,wst=win.scrollTop()
		btn.css('top',wh-300+wst)
		if (wst>500){
			btn.fadeIn(500);
		}else{
			btn.fadeOut(500);
		}
	});

	//当点击跳转链接后，回到页面顶部位置
	btn.click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});
});