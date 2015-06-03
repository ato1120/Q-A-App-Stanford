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
  
  $('.appBtnGoToQuestion')
    .on('click', function(e){
      window.location.href = 'single-question.html';
    });
  
//  if (document.body.addEventListener) {
//    document.body.addEventListener('click', goToQuestion,false);
//  } else {
//    document.body.attachEvent('onclick', goToQuestion);
//  }
//  
//  function goToQuestion(e) {
//    e = e || window.event;
//    var target = e.target || e.srcElement;
//    if (target.className.match(/appBtnGoToQuestion/)) {
//      console.log('test');
//    }
//  }
  
})(window, jQuery);