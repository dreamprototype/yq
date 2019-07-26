//utils.js 工具包

function Menu(opt){
		var me = this;
		this.opt = opt;
		this.lastOpenCont;
		me.curi = 0;
		opt.btn.each(function(i, n){
			$(this).on('mouseenter',function(e){
				me.curi = i;
				me.mouseenter($(this));
			});

			$(this).on('mouseleave',function(e){
				me.curi = -1;
				me.mouseleave($(this));
			});
		})
	}

Menu.prototype = {
	mouseenter: function(btn){
		// this.opt.btn.removeClass(this.opt.hoverClass);
		btn.addClass(this.opt.hoverClass);

		this.lastOpenCont && this.lastOpenCont.slideUp();
		btn.find(this.opt.list).stop().slideDown();
		this.lastOpenCont = btn.find(this.opt.list);

		this.opt.mouseenter(btn, this.curi);
	},
	mouseleave: function(btn){
		btn.removeClass(this.opt.hoverClass);
		btn.find(this.opt.list).stop().slideUp();

		this.opt.mouseleave(btn, this.curi);
	}
}