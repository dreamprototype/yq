$(function(){
	$('#nav li.navCont').mouseenter(function(){
		$(this).children('a').addClass('hoverBg')
		$('ul',$(this)).show();
	}).mouseleave(function(){
		$(this).children('a').removeClass('hoverBg')
		$('ul',$(this)).hide();
	})
});