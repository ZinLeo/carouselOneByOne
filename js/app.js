$(function(){
	/*
	1、逐个移动轮播
	2、用于导航、新闻信息
	*/ 
	var rollUl = $("#rollUl");
	var size = rollUl.find("li").length;
	var btnL = $("#btnL");
	var btnR = $("#btnR");
	var width = 210;
	var index = 0;
	var show = 3;
	var timer;

	//移动
	function move(){
		if(index == size - (show - 1)){
			index = 0;
		}

		if(index == -1){
			index = size - show;
		}

		rollUl.stop().animate({
			'left':-(width * index)
		});
	}

	//左移
	btnL.on('click',function(){
		index ++;
		move();
	});

	//右移
	btnR.on('click',function(){
		index --;
		move();
	});

	//定时器
	timer = setInterval(function(){
		index ++;
		move();
	},2500);

	//悬浮停止定时器
	$(".box").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			index ++;
			move();
		},2500);
	});
});