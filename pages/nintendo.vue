<template>
  <div>
    <div>
      <img
        src="../assets/img/logonintendo.jpg"
        alt="logo da nintendo"
        width="100%"
        height="400px"
      />
    </div>
    <div>
      <nuxt-link to="/">
        <b-card
          overlay
          img-src="../assets/img/nintendoswitch.jpg"
          img-alt="Nintendo Switch"
          text-variant="black"
          title="Nintendo Switch"
          width="100%"
          height="400px"
        >
          <b-card-text>
            O Nintendo Switch foi desenvolvido para fazer parte da sua vida,
            transformando-se de um console doméstico em um console portátil num
            piscar de olhos.
          </b-card-text>
        </b-card>
      </nuxt-link>
    </div>
    <div class="containerNintendo">
      <div class="cardNintendo1">
        <nuxt-link to="/lançamentos">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/illust-crown-2x_1bwz.560.png"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Os lançamentos da semana para PS4, Xbox One, Switch e PC</p>
        </nuxt-link>
      </div>
      <div class="cardNintendo2">
        <nuxt-link to="/supermash">
          <img
            src="../assets/img/steve.jpg"
            alt=""
            height="490px"
            width="300px"
          />
          <p>
            Super Smash Bros Ultimate anuncia Steve de Minecraft como novo
            lutador
          </p>
        </nuxt-link>
      </div>
      <div class="cardNintendo3">
        <nuxt-link to="control">
          <img
            src="../assets/img/control.jpg"
            alt=""
            height="490px"
            width="300px"
          />
          <p>Control Ultimate Edition – Cloud Version é anunciado Switch</p>
        </nuxt-link>
      </div>

      <div class="cardNintendo4">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
          <p></p>
        </nuxt-link>
      </div>
      <div class="cardNintendo5">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
        </nuxt-link>
      </div>
      <div class="cardNintendo6">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
          <p></p>
        </nuxt-link>
      </div>
      <div class="cardNintendo7">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
          <p></p>
        </nuxt-link>
      </div>
      <div class="cardNintendo8">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
          <p></p>
        </nuxt-link>
      </div>
      <div class="cardNintendo9">
        <nuxt-link to="/">
          <img src="" alt="" height="490px" width="300px" />
          <p></p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
@import '../assets/css/estilo.scss';
</style>
