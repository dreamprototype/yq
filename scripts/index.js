$(document).ready(function(){	
	/*banner特效*/
	$('#iview').iView({
		fx:'fade',
		strips: 20,
		blockCols: 20,
		blockRows: 3,
		pauseTime: 3000,
		pauseOnHover: true,
		directionNavHoverOpacity: 0,
		timer: "Bar",
		timerDiameter: 120,
		timerPadding: 3,
		timerStroke: 4,
		timerBarStroke: 0,
		timerColor: "#0F0",
		timerPosition: "bottom-right",
		timerY: -100010,
		controlNav: true, // 1,2,3,4... navigation
		controlNavNextPrev: true, // previous,next navigation
		controlNavHoverOpacity: 0.6, // Navigation fade on hover
		controlNavThumbs: false, // Show thumbs navigation
		controlNavTooltip: true // Show tooltip image previewer
	});
	
	/*图片轮播特效*/
	$(".nvision").hover(function(){
		$(".prev,.next").show();
	},function(){
		$(".prev,.next").hide();
	});
	
	var site = 1,
		speed = 500,
		nwidth = $(".nvisionpic").width(),
		nul = $(".nvisionpic ul"),
		len = nul.children("li").length,
		firstli = nul.children("li").eq(0).clone(),
		lastli = nul.children("li").eq(len-1).clone();
		
	//插入克隆	
	firstli.appendTo(nul).addClass("clone");
	lastli.prependTo(nul).addClass("clone");
	nul.css("left",-nwidth);//初始跳过克隆
		
	$(".next").click(function(){
		if(!nul.is(":animated")){
			site++;
			if(site>len){
				nul.animate({"left":-site*nwidth},speed,function(){
					nul.css("left",-nwidth);
					site = 1;
				});				
			}else{
				$(".nvisionpic ul").animate({"left":-site*nwidth},speed);
			}
		}
	});
	
	$(".prev").click(function(){
		if(!nul.is(":animated")){
			site--;
			if(site<1){
				nul.animate({"left":0},speed,function(){
					site = len;
					nul.css("left",-site*nwidth);	
				});
			}else{
				nul.animate({"left":-site*nwidth},speed);
			}
		}
	});
	
	$(".nvisionpic a").hover(function(){
		$(this).append("<i></i>")
	},function(){
		$(this).find("i").remove();
	});
		
});