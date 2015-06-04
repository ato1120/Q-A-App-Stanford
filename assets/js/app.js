(function(window, $) {
  
  window.errorLog = window.errorLog || [];
  
  var homeTopAskBtn = document.getElementById('homeTopAskBtn'),
      homeTopSearchBtn = document.getElementById('homeTopSearchBtn');

  try {
    homeTopAskBtn.onclick = function(){
      window.location.href = 'ask-question.html';
    };

    homeTopSearchBtn.onclick = function() {
      window.location.href = 'search-result.html';
    };
  } catch (err) {
    window.errorLog.push(err);
  }  
  
  $('.alert-info ul.tags a')
    .on('click', function(e){
      e.preventDefault();
      window.location.href = 'search-result.html';
    });

  $('.appBtnGoToQuestion')
    .on('click', function(e){
      window.location.href = 'single-question.html';
    });
  
  $('.q-btn')
    .on('click', function(e){
      e.preventDefault();
      window.location.href = 'single-question.html';
    });
  
})(window, jQuery);