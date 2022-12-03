/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');




$(function() {
  
    var slideCount =  $(".slider ul li").length;
    var slideWidth =  $(".slider ul li").width();
    var slideHeight =  $(".slider ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    
    function moveLeft() {
      $(".slider ul").stop().animate({
        left: + slideWidth
      },700, function() {
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider ul").stop().animate({
        left: - slideWidth
      },700, function() {
        $(".slider ul li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    
    $(".next").on("click",function(){
      moveRight();
    });
    
    $(".prev").on("click",function(){
      moveLeft();
    });
    
    
  });
  
  


