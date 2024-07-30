//ナビゲーション用
;$(function(){
	$('#gnav_btn').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('header nav').removeClass('open').stop().slideUp(500);
			$('#outside').fadeOut(100).addClass("disnone");
			$('body').removeClass('add_overray');
		}else{
			$(this).addClass('open');
			$('header nav').addClass('open').stop().slideDown(500);
			$('#outside').fadeIn(100).addClass("disnone");
			$('body').addClass('add_overray');
		}
	});
	$('#outside').on('click', function(){
		$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$(this).fadeOut(100).addClass("disnone");
		$('body').removeClass('add_overray');
	});
	$('#nav_inner a').on('click', function() {
				$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$('#outside').fadeIn(100).addClass("disnone");
		$('body').removeClass('add_overray');
		});
});