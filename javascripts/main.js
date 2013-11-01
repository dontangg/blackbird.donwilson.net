$(function() {

//  var handleHash = function(hash) {
//    console.log('handling: ' + hash);
//    if (hash.indexOf('feedback') === -1) {
//      UserVoice.hidePopupWidget();
//    } else {
//      UserVoice.showPopupWidget();
//    }
//  }
//
//  $(window).bind('hashchange', function() {
//    handleHash(window.location.hash);
//  });
//  
//  handleHash(window.location.hash);
  
/*
width: 565, // width of slider panel
height: 290, // height of slider panel
spw: 7, // squares per width
sph: 5, // squares per height
delay: 3000, // delay between images in ms
sDelay: 30, // delay beetwen squares in ms
opacity: 0.7, // opacity of title and navigation
titleSpeed: 500, // speed of title appereance in ms
effect: '', // random, swirl, rain, straight
navigation: true, // prev next and buttons
links : true, // show images as links
hoverPause: true // pause on hover
*/
  $('#coin-slider').coinslider({effect:'rain', links:false, sDelay:0, width:620, height:413});
});
