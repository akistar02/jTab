$.fn.jTab = function (option){
	var options = jQuery.extend({
		animate:true,
		duration: 400
	},options);
	
	if(option.animate == false){
		option.duration = 0;
	}
	var tabWrap = this;
	var tabCount = tabWrap.length;
	for(var tab = 0;tab < tabCount; tab++){
		tabEvent(tabWrap,tab);
	}
	
	function tabEvent(tabWrap,num){
		var list = tabWrap.eq(num).find("ul").find("li").length - 1;
		for(var i = 1; i <= list;i++){
			tabWrap.eq(num).find("div").eq(i).css({"display":"none"})
		}
	
		tabWrap.eq(num).find("ul").find("li").eq(0).addClass("current");		
		tabWrap.eq(num).find("ul").find("li").on("click",function (){
			
			if(!$(this).hasClass("current")){
				var tabClick = tabWrap.eq(num).find("li").index(this);
				for(var i = 0;i<=list;i++){
					if(tabWrap.eq(num).find("li").eq(i).hasClass("current")){
						current = i;
						break;	
					}
				}
				tabWrap.eq(num).find("div").eq(current).fadeTo(option.duration,0,function (){
					tabWrap.eq(num).find("div").eq(current).css("display","none");
				});
				tabWrap.eq(num).find("div").eq(tabClick).css({"display":"block","opacity":0}).fadeTo(option.duration,1);
				tabWrap.eq(num).find("li").eq(current).removeClass("current");
				tabWrap.eq(num).find("li").eq(tabClick).addClass("current");
			}
			
		});	
	}
}