class HomeController < ApplicationController
  def index

  end

  def claw_open
    Messenger.new().claw_open!
    render nothing: true
  end

  def claw_close
    Messenger.new().claw_close!
    render nothing: true
  end

  def claw_up
    Messenger.new().claw_up!
    render nothing: true
  end

  def claw_down
    Messenger.new().claw_down!
    render nothing: true
  end

  def base_left
    Messenger.new().base_left!
    render nothing: true
  end

  def base_right
    Messenger.new().base_right!
    render nothing: true
  end


end