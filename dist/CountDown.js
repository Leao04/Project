const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

let countdown = new Date('31/12/2020 00:00:00').getTime()
let x = setInterval(() => countDown(), second)

function countDown() {
  const now = new Date(Date.now()).getTime()
  const diff = countdown - now

  document.getElementById('days').textContent = Math.floor(diff / day)
  document.getElementById('hours').textContent = Math.floor((diff % day) / hour)
  document.getElementById('minutes').textContent = Math.floor(
    (diff % hour) / minute
  )
  document.getElementById('seconds').textContent = Math.floor(
    (diff % minute) / second
  )
}

function myFunction() {
  clearInterval(x)
  const dateend = document.form_main.date_end.value
  countdown = new Date(`${dateend} 00:00:00`).getTime()
  // eslint-disable-next-line no-unused-vars
  x = setInterval(() => countDown(), myFunction(), second)
}
