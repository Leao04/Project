let countdownTimer = new TenUp.CountdownTimer('.countdown-timer', {
  onCreate: function (instance) {
    console.log('onCreate callback', instance)
  },

  onEnd: function (instance) {
    console.log('onEnd callback', instance)
  },

  onTick: function (instance) {
    console.log('onTick callback', instance)
  },
})
