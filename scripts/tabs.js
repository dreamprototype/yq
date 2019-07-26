//utils.js 选项卡
$(function(){
	
	var iIndex;
	
	$(".news h4 a").mouseover(function(){
		$(".news h4 a").removeClass("tabactive");
		$(this).addClass("tabactive");
		
		iIndex = $(this).index();
		iNow = iIndex;
		$(".kncnews").hide();
		$(".kncnews").eq(iIndex).show();
		//tabactive
	});
	
	var timer = null;
	var iNow = 0;
	
	dong();
	
	function dong(){
		timer = setInterval(function(){
			tab();
		},3000);	
	}
	
	$(".kncnews,.news h4 a").mouseover(function(){
		clearInterval(timer);
	});
	
	$(".kncnews,.news h4 a").mouseout(function(){
		dong();
	});
	
	function tab(){
		iNow++;
		if( iNow == 5 ){
			iNow = 0;
		}
		
		$(".news h4 a").removeClass("tabactive");
		$(".news h4 a").eq(iNow).addClass("tabactive");
		
		$(".kncnews").hide();
		$(".kncnews").eq(iNow).show();
	}
	
});
