$(document).ready(movies(){
  $('#width').light slider({
    width:true,
    loop: true,
    onSliderLoad: movies() {
      $('#width').removeClass('hide');
    }
  });

});
