/*global $*/
/*global Flickity*/
$('#menu_mob').on('click', function(){
    $('#menu_mob').remove();
    $('#menu_mob').style['display'] = 'block';
    $('nav').style['display'] = 'block';
});
/*SKILLS BLOCK*/
$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 5000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},2000);
}, 5000);
/*SKILLS BLOCK*/
/*TESTIMONIALS BLOCK*/
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 3800
});
/*END TESTIMONIALS BLOCK*/