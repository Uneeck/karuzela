/*$(function(){
	var carouselList = $("#carousel ul");
	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 1500, moveFirstSlide);
	};
		function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	setInterval(changeSlide, 2000);

	
});*/

$(function(){

	var carouselList = $("#carousel ul");
	$(".left").click(function(){
		carouselList.animate({'marginLeft':+400}, 1500, moveLastSlide);
	});
	$(".right").click(function(){
		carouselList.animate({'marginLeft':-400}, 1500, moveFirstSlide);
	});
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	function moveLastSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	}
});