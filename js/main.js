$(document).ready(function(){
	$('.single-item').slick({
          arrows: false,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
    });

    $('.reviews-slider').slick({
          arrows: false,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          arrows: true,
    });

    $('.fixed-menu__link').click(function(){
    	$(this).find('~ .dropdown__menu').slideToggle();
    	$(this).toggleClass('fixed-color')
    });
    $('.drop-menu').click(function(){
    	$('.fixed-menu').slideToggle();
    });
    $('.bottom-header__close').click(function(){
    	$('.fixed-menu').slideToggle();
    });

  $('.adress__block').hide();
  $('.opt1').show();

  $('#choose').change(function() {
    $('.adress__block').slideUp();
    $('.adress__block').removeClass('current-opt');
    $("." + $(this).val()).slideDown();
    $("." + $(this).val()).addClass('current-opt');
  });

});