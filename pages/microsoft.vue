<template>
  <div>
    <div>
      <img
        src="../assets/img/xbox-controles.jpg"
        alt=""
        height="600px"
        width="100%"
      />
    </div>

    <div class="containerMicrosoft">
      <div class="CardsJuntos">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <nuxt-link to="/">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://assets1.ignimgs.com/2020/05/06/assassins-creed-valhalla-1588780126472.jpg?width=300&crop=16%3A9"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      Xbox Series X Lista de Jogos de Lançamento - Resoluções e
                      Framerates
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </nuxt-link>
          </b-card>
        </div>
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <nuxt-link to="/">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://assets1.ignimgs.com/2019/02/08/tipsandtrickspromo-1549594476063.jpg?width=300&crop=16%3A9"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      Versão do Switch do Apex Legends adiada para 2021
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </nuxt-link>
          </b-card>
        </div>
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <nuxt-link to="/">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://assets2.ignimgs.com/2014/11/13/halo-mccjpg-bc17eb.jpg?width=300&crop=16%3A9"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      Halo Movie: Guillermo del Toro aparentemente queria mestre
                      chefe para <a href="http://">Ver Mais</a>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </nuxt-link>
          </b-card>
        </div>
      </div>
    </div>
    <div class="card-microsoft">
      <div>
        <nuxt-link to="">
          <b-card
            overlay
            img-src="../assets/img/access.jpg"
            img-height="500px"
            img-alt="Card Image"
            text-variant="white"
            title="EA ACCESS"
            sub-title="Game Pass"
          >
            <b-card-text>
              O EA PLAY está chegando para assinantes do Microsoft GAME PASS
            </b-card-text>
          </b-card>
        </nuxt-link>
      </div>
      <br />
      <div>
        <nuxt-link to="">
          <b-card
            overlay
            img-src="../assets/img/xboxx.jpg"
            img-height="500px"
            img-alt="Card Image"
            text-variant="white"
            title="Xbox Series X"
            sub-title="A mais nova arma da Microsfot"
          >
            <b-card-text>
              Novo vídeo game da Microsft chegará em Novembro, dia 10.
            </b-card-text>
          </b-card>
        </nuxt-link>
      </div>
      <br />
      <div class="finalcards">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="../assets/img/pubg.jpg"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="PUBG recebe mapa que muda a cada partida">
                  <b-card-text>
                    Paramo é o novo mapa de PlayerUnknown's Battlegrounds
                    (PUBG), que muda completamente a cada partida.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/css/estilo.scss";
</style>
