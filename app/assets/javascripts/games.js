var EMAIL_MATCHER = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]+/

$( document ).ready(function() {
  var $emailArea = $('#invite-user-container');

  $emailArea.keyup(function(e) {

    // grab the last email input field
    if ($emailArea.find('div input').last().val().match(EMAIL_MATCHER)) {
      // if it's empty, add a new input field
      var newForm = $('<div><input name="email[]" type="text" /></div>')
        .appendTo($emailArea)
        .hide()
        .slideToggle('fast');
    }
  })


});