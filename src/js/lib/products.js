$('.slider-close').click(function() {
  $('.slider-block').removeClass('slider-block_is-active');
});
$('.navigation__prev').click(function() {
  $.getJSON('../templates/data/products.json', function(json) {
  		let idEl = $('.slider__img').attr('id');
  		let amount = json.length;

  		if (idEl > 1) {
  			$('.slider__img').attr('id', json[idEl-2].id);
   			$('.slider__img').attr('src', json[idEl-2].url);
   			$('.navigation__slide-number').html(json[idEl-2].id);
   		} else {
   			$('.slider__img').attr('id', json[amount-1].id);
   			$('.slider__img').attr('src', json[amount-1].url);
   			$('.navigation__slide-number').html(json[amount-1].id);
  		}

  });
});
$('.navigation__next').click(function() {
  $.getJSON('../templates/data/products.json', function(json) {
  		let idEl = $('.slider__img').attr('id');
  		let amount = json.length;

  		if (idEl < amount) {
  			$('.slider__img').attr('id', json[idEl].id);
   			$('.slider__img').attr('src', json[idEl].url);
   			$('.navigation__slide-number').html(json[idEl].id);
  		} else {
   			$('.slider__img').attr('id', json[0].id);
   			$('.slider__img').attr('src', json[0].url);
   			$('.navigation__slide-number').html(json[0].id);
  		}
  });
});
$('#back').click(function() {
  $('.slider-block').addClass('slider-block_is-active');
});
