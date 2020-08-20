$('button').button();

changeColor('color');

function changeColor(cssOption) {
  $('.slider').slider({
    animate: 'slow',
    range: 'min',
    max: 255,
    value: 0,
    slide: function () {
      let value_red = $('.slider_1').slider('value');
      let value_green = $('.slider_2').slider('value');
      let value_blue = $('.slider_3').slider('value');
      $('textarea').css(cssOption, `rgb(${value_red}, ${value_green}, ${value_blue})`);
    },
  });
}

$('#radio-color').on('click', function () {
  changeColor('color');
});

$('#radio-bg').on('click', function () {
  changeColor('backgroundColor');
});
