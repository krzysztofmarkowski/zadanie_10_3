$(document).ready(function() {

    var carouselList = $("#carousel ul");

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function back() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:0});        
        clearInterval(timeChange);
        timeChange = setInterval(changeSlide, 4000);
        carouselList.hide();        
        carouselList.fadeIn(1000);        
    }

    function next() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
        clearInterval(timeChange);
        timeChange = setInterval(changeSlide, 4000);
        carouselList.hide();        
        carouselList.fadeIn(1000);
    }

    function changeSlide() {
        carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
    }

    var timeChange = setInterval(changeSlide, 4000);

    $('.back button').click(back);
    $('.next button').click(next);
});