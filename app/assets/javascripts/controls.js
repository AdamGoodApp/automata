$( document ).ready(function() {

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        break;

      case 38: // up
        $('.claw_1_').attr('id', 'claw_move_up');
        break;

      case 39: // right
        break;

      case 40: // down
        $('.claw_1_').attr('id', 'claw_move_down');
        break;

      case 32:
        claw();
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function claw() {
    var state = $('.firstfinger_1_').attr('id');
    if(state == 'firstfinger_open') {
      $('.firstfinger_1_').attr('id', 'firstfinger_close');
      $('.secondfinger_1_').attr('id', 'secondfinger_close');
    } else if(state == "firstfinger_close") {
      $('.firstfinger_1_').attr('id', 'firstfinger_open');
      $('.secondfinger_1_').attr('id', 'secondfinger_open');
    }
  }

});



