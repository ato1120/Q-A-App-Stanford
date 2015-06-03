(function(window, $) {
  
  var homeTopAskBtn = document.getElementById('homeTopAskBtn'),
      homeTopSearchBtn = document.getElementById('homeTopSearchBtn');
  
  // link = getUrl.pathname.split('/')[getUrl.pathname.split('/').length - 1];

  homeTopAskBtn.onclick = function(){
    window.location.href = 'ask-question.html';
  };
  
  homeTopSearchBtn.onclick = function() {
    window.location.href = 'search-result.html';
  };
  
})(window, jQuery);