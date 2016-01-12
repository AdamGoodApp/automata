class Messenger

  attr_accessor :pusher_client

  def initialize
    @pusher_client = Pusher::Client.new({
                                            app_id: ENV['pusher_app_id'],
                                            key: ENV['pusher_key'],
                                            secret: ENV['pusher_secret']
                                        })
  end

  def claw_open!
    pusher_client.trigger('robot', 'movement', {part: 'grip', state: 'open'})
  end

  def claw_close!
    pusher_client.trigger('robot', 'movement', {part: 'grip', state: 'close'})
  end

  def claw_up!
    pusher_client.trigger('robot', 'movement', {part: 'claw', state: 'up'})
  end

  def claw_down!
    pusher_client.trigger('robot', 'movement', {part: 'claw', state: 'down'})
  end

  def base_left!
    pusher_client.trigger('robot', 'movement', {part: 'base', state: 'left'})
  end

  def base_right!
    pusher_client.trigger('robot', 'movement', {part: 'base', state: 'right'})
  end


end