$(document).ready(function(){
	function nameFadeIn1(){
		$(".hireMe1").fadeIn(3000).css("display", "inline-block");
	};

	setInterval(nameFadeIn1, 1000);

	function nameFadeIn2(){
		$(".hireMe2").fadeIn(3000).css("display", "inline-block");
	};

	setInterval(nameFadeIn2, 2000);
})
