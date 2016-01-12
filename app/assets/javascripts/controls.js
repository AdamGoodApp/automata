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

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

});



