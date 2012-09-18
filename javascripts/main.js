$(function() {

  var handleHash = function(hash) {
    console.log('handling: ' + hash);
    if (hash.indexOf('feedback') === -1) {
      UserVoice.hidePopupWidget();
    } else {
      UserVoice.showPopupWidget();
    }
  }

  $(window).bind('hashchange', function() {
    handleHash(window.location.hash);
  });
  
  handleHash(window.location.hash);
});