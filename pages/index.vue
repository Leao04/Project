<template>
  <div>
    <div class="carrossel">
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
    <h1 class="evento">O maior evento da América Latina</h1>
    <div class="cavaleiro">
      <img
        src="../assets/img/comic.jpg"
        height="500px"
        alt="Imamgem do evento comic con"
      />
    </div>
    <div class="comic">
      <br />
      <br />
      <div>
        <h1>Contagem regressiva</h1>
        <form name="form_main">
          <label for="numero">Data:</label>
          <input name="date_end" type="date" onblur="myFunction()" />
          <br />
        </form>
        <div class="container">
          <ul>
            <li><span id="days"></span>days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container1">
      <div class="card1">
        <nuxt-link to="/Postagem/Coringa">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/635655082846943146-cdzbueiuuaatgqb_q1f5.560.png"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Coringa de Jared Leto voltará em Snyder Cut de Liga da Justiça</p>
        </nuxt-link>
      </div>
      <div class="card2">
        <nuxt-link to="/Postagem/Cyberpunk">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/cp77-1920x1080-en-1583665789_v5es.560.jpg"
            alt=""
            height="490px"
            width="300px"
          />
          <p>
            Cyberpunk 2077: Lançamento, multiplayer, história, gameplay e mais
          </p>
        </nuxt-link>
      </div>
      <div class="card3">
        <nuxt-link to="/Postagem/Pokemon">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/crown-tundra-home_puba.560.png"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Pokémon Sword & Shield: Tudo sobre The Crown Tundra</p>
        </nuxt-link>
      </div>
      <div class="card4">
        <nuxt-link to="/Postagem/Netflix">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/579b91e2b08074561cf3b8073878f301_stxy.560.png"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Netflix: As estreias de filmes e séries em novembro</p>
        </nuxt-link>
      </div>
      <div class="card5">
        <nuxt-link to="/Postagem/lancamento">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/hyrule-warriors-switch-button-fin-1599595486973_3hxe.560.png"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Lançamentos de jogos da semana para consoles e PC</p>
        </nuxt-link>
      </div>
      <div class="card6">
        <nuxt-link to="/Postagem/AOC">
          <img
            src="https://assets1.ignimgs.com/2020/10/21/aoc-deck-1603308225333.jpg?fit=crop&width=282&height=470"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Twitch Stream da AOC tem implicações para a política dos EUA</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script src="../dist/CountDown.js"></script>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      posts: [],
    }
  },
  async fetch() {
    const posts = await this.$axios.$get('posts')
    const users = await this.$axios.$get('users')
    this.posts = posts
      .map((post) => ({
        ...post,
        author: users.find((user) => user._id === post.author).name,
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
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

<style>
@import '../assets/css/estilo.scss';
</style>
