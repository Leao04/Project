<template>
  <div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Conheça o maior remaster já produzido"
          text="Resident Evil 2"
          img-src="../assets/img/resident.jpg"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="../assets/img/anime.jpg">
          <h1>O mundo dos animes agora na sua tela</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="../assets/img/ac.jpg"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/img/twice.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <br />
    <div class="comic">
      <h1 class="evento">O maior evento da América Latina</h1>
      <img class="con" src="../assets/img/comic.jpg" alt="imagem" />
      <br />
      <br />
      <p class="contagem">Contagem regressiva para CCXP 2020</p>
      <div>
        <time
          class="countdown-timer tenup-countdown-timer"
          datetime="2046-01-01T00:00:00"
          role="timer"
          aria-label="Countdown timer"
          aria-atomic="true"
          aria-live="off"
          ><span class="tenup-countdown-timer-years" aria-label="25 years"
            >25 years</span
          >,
          <span class="tenup-countdown-timer-weeks" aria-label="8 weeks"
            >8 weeks</span
          >,
          <span class="tenup-countdown-timer-days" aria-label="2 days"
            >2 days</span
          >,
          <span class="tenup-countdown-timer-hours" aria-label="1 hour"
            >1 hour</span
          >,
          <span class="tenup-countdown-timer-minutes" aria-label="46 minutes"
            >46 minutes</span
          >,
          <span aria-label="40 seconds" aria-hidden="true" kkl=""
            >40 seconds</span
          ></time
        >
      </div>
    </div>
    <div class="container1">
      <div class="card1">
        <img
          src="https://sm.ign.com/t/ign_br/slotter/default/635655082846943146-cdzbueiuuaatgqb_q1f5.560.png"
          alt=""
          height="490px"
          width="300px"
        />
        <p>Coringa de Jared Leto voltará em Snyder Cut de Liga da Justiça</p>
      </div>

      <div class="card2">
        <img
          src="https://sm.ign.com/t/ign_br/slotter/default/cp77-1920x1080-en-1583665789_v5es.560.jpg"
          alt=""
          height="490px"
          width="300px"
        />
        <p>
          Cyberpunk 2077: Lançamento, multiplayer, história, gameplay e mais
        </p>
      </div>
      <div class="card3">
        <img
          src="https://sm.ign.com/t/ign_br/slotter/default/crown-tundra-home_puba.560.png"
          alt=""
          height="490px"
          width="300px"
        />
        <p>Pokémon Sword & Shield: Tudo sobre The Crown Tundra</p>
      </div>
      <div class="card4">
        <img
          src="https://sm.ign.com/t/ign_br/slotter/default/579b91e2b08074561cf3b8073878f301_stxy.560.png"
          alt=""
          height="490px"
          width="300px"
        />
        <p>Netflix: As estreias de filmes e séries em novembro</p>
      </div>
      <div class="card5">
        <img
          src="https://assets1.ignimgs.com/2020/10/21/falcon-deck-1603300057588.png?fit=crop&width=282&height=470"
          alt=""
          height="490px"
          width="300px"
        />
        <p>De volta alguns dos personagens MCU 'mais antigos'</p>
      </div>
      <div class="card6">
        <img
          src="https://assets1.ignimgs.com/2020/10/21/aoc-deck-1603308225333.jpg?fit=crop&width=282&height=470"
          alt=""
          height="490px"
          width="300px"
        />
        <p>Twitch Stream da AOC tem implicações para a política dos EUA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<script src="../dist/countdown-timer.js"></script>
<script>
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
</script>
<style>
@import '../assets/css/estilo.scss';
</style>
