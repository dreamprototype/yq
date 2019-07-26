//index.js 业务逻辑

var blockLeft = $('#nav > li.moveBlock').position().left;
new Menu({
	btn: $('#nav > li'),
	list: '.dropdown',
	hoverClass: 'hover',
	mouseenter: function(btn, i){
		var left = btn.position().left;
		if(blockLeft === undefined){
			blockLeft
		}
		$('#nav > li.moveBlock').stop().animate({"left": left});
	},
	mouseleave: function(btn, i){
		$('#nav > li.moveBlock').stop().animate({"left": blockLeft});
	}
})
