<template>
  <div>
    <hr />
    <div class="gridFilme1">
      <div class="FilmesTextoMeio">
        <h1>Notícias mais recentes sobre filmes</h1>
      </div>
      <div class="CardFilme1V">
        <nuxt-link to="/about">
          <b-card-group deck>
            <b-card
              title="Cobra Kai"
              img-src="https://sm.ign.com/t/ign_br/slotter/2/28948/28948_fcn9.560.png"
              img-alt="Imagem sobre o filme Cobra Kai"
              img-top
            >
              <b-card-text>
                Cobra Kai: 3ª temporada deve ter vilão de Karatê Kid 2
              </b-card-text>
            </b-card>
          </b-card-group>
        </nuxt-link>
      </div>

      <div class="CardFilme2V">
        <nuxt-link to="/about">
          <b-card-group deck>
            <b-card
              title="Quiz de Naruto"
              img-src="https://sm.ign.com/t/ign_br/slotter/default/itachi-uchiha_5bpp.560.jpg"
              img-alt="Naruto"
              img-top
            >
              <b-card-text>
                Quiz de Naruto: Quem seria seu parceiro da Akatsuki?
              </b-card-text>
            </b-card>
          </b-card-group>
        </nuxt-link>
      </div>

      <div class="CardFilme3V">
        <nuxt-link to="/about">
          <b-card-group deck>
            <b-card
              title="Karatê Kid e Cobra Kai"
              img-src="https://sm.ign.com/t/ign_br/slotter/2/28936/28936_5ajq.560.jpg"
              img-alt="Karatê Kid e Cobra Kai"
              img-top
            >
              <b-card-text>
                Karatê Kid e Cobra Kai do pior ao melhor: Veja nosso ranking
              </b-card-text>
            </b-card>
          </b-card-group>
        </nuxt-link>
      </div>
      <div class="FilmesTextoMeioBaixo"><h1>Noticias</h1></div>
      <div class="CardH1">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/screenshot/default/blob_84uk.280.jpg"
                  alt="Orgulho Nerd"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body
                  title="Todo dia (e não só o 25 de maio!) é dia do Orgulho Nerd"
                >
                  <b-card-text>
                    Entenda porque seus amigos estão carregando toalhas na
                    mochila neste dia tão especial
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
      <div class="CardH2">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/screenshot/default/maxresdefault-17_rd5v.280.jpg"
                  alt="Live action do jogo Contra"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body
                  title="Contra será adaptado para filme live-action e série de TV"
                >
                  <b-card-text>
                    A Konami fez o anúncio em seu site oficial, dizendo que
                    pretende levar todo tipo de entretenimento ao público.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
      <div class="CardH3">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/screenshot/default/frame-entrevista-kc7z640_xbb7.280.jpg"
                  alt="Homem-aranha, tom Holland"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body
                  title="Homem-Aranha: Quem Tom Holland gostaria de enfrentar?"
                >
                  <b-card-text>
                    Já viu o filme? Então relembre a nossa entrevista com o
                    protagonista de De Volta ao Lar.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
      <div class="CardH4">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/news/a/aquaman-mo/aquaman-movie-takes-place-after-justice-league_6dmu.280.jpg"
                  alt="Filme aquaman"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body
                  title="Filme do Aquaman acontecerá depois de Liga da Justiça"
                >
                  <b-card-text>
                    O produtor executivo Charles Roven revelou detalhes sobre
                    como será o longa-metragem.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
      <div class="CardH5">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/screenshot/default/v-papers-please-filme-760x428_nwyu.280.jpg"
                  alt="Papers please curta metragem"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body title="Papers, Please ganhará curta-metragem;">
                  <b-card-text>
                    Filme será baseado no jogo indie original de 2013 que coloca
                    você na pele de um fiscal.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
      <div class="CardH6">
        <nuxt-link to="/about">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5">
                <b-card-img
                  src="https://sm.ign.com/t/ign_br/news/j/jogadores-/jogadores-de-injustice-2-tem-acesso-exclusivo-a-conteudos-do_hpv2.280.jpg"
                  alt="Injustice 2"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="7">
                <b-card-body
                  title="Injustice 2 recebe conteúdos do filme da Mulher-Maravilha"
                >
                  <b-card-text>
                    O jogo de luta para consoles e dispositivos mobile da
                    NetherRealm Studios está repleto de surpresas sobre a
                    amazona que estreia em breve.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
@import '../assets/css/estilo.scss';
</style>
