const countdownTimer = new TenUp.CountdownTimer('.countdown-timer', {
  onCreate(instance) {
    console.log('onCreate callback', instance)
  },

  onEnd(instance) {
    console.log('onEnd callback', instance)
  },

  onTick(instance) {
    console.log('onTick callback', instance)
  },
})
