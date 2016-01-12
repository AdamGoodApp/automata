$( document ).ready(function() {

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        baseLeft();
        break;

      case 38: // up
        $('.claw_1_').attr('id', 'claw_move_up');
        clawUp();
        break;

      case 39: // right
        baseRight();
        break;

      case 40: // down
        $('.claw_1_').attr('id', 'claw_move_down');
        clawDown();
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
      closeClaw();
    } else if(state == "firstfinger_close") {
      $('.firstfinger_1_').attr('id', 'firstfinger_open');
      $('.secondfinger_1_').attr('id', 'secondfinger_open');
      openClaw();
    }
  }

  function openClaw() {
    $.ajax({
      method: "GET",
      url: "/claw-open"
    }).done(function( msg ) {
    });
  }

  function closeClaw(){
    $.ajax({
      method: "GET",
      url: "/claw-close"
    }).done(function( msg ) {
    });
  }

  function clawUp(){
    $.ajax({
      method: "GET",
      url: "/claw-up"
    }).done(function( msg ) {
    });
  }

  function clawDown(){
    $.ajax({
      method: "GET",
      url: "/claw-down"
    }).done(function( msg ) {
    });
  }

  function baseLeft(){
    $.ajax({
      method: "GET",
      url: "/base-left"
    }).done(function( msg ) {
    });
  }

  function baseRight(){
    $.ajax({
      method: "GET",
      url: "/base-right"
    }).done(function( msg ) {
    });
  }

});



