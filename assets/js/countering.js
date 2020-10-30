'use strict'

const { get } = require('core-js/fn/dict')

var hh = 0
var mm = 0
var ss = 0

var tempo = 1000 //Quantos milésimos valem um segundo?
var cron

function start() {
  cron = setInterval(timer, tempo)
}

function pause() {}

function stop() {}

function timer() {
  document.getElementById('counter').innerText = 'teste'
}

;<script>export default {}</script>
