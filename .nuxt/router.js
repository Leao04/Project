import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _87ec388a = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _abf5c998 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _e52d4b86 = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _c7749fea = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _534357c4 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _01bde168 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _078a6c93 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _0278ba7a = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _71446147 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d329f568 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _16ef79c7 = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _940ae08e = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _30282a42 = () => interopDefault(import('..\\pages\\supermash.vue' /* webpackChunkName: "pages/supermash" */))
const _3497cd1e = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _3e8493e5 = () => interopDefault(import('..\\pages\\Postagem\\AOC.vue' /* webpackChunkName: "pages/Postagem/AOC" */))
const _c4580596 = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _2cbd274b = () => interopDefault(import('..\\pages\\Postagem\\Cyberpunk.vue' /* webpackChunkName: "pages/Postagem/Cyberpunk" */))
const _5df84b8c = () => interopDefault(import('..\\pages\\Postagem\\Lancamento.vue' /* webpackChunkName: "pages/Postagem/Lancamento" */))
const _048fef02 = () => interopDefault(import('..\\pages\\Postagem\\Netflix.vue' /* webpackChunkName: "pages/Postagem/Netflix" */))
const _59850fc3 = () => interopDefault(import('..\\pages\\Postagem\\Pokemon.vue' /* webpackChunkName: "pages/Postagem/Pokemon" */))
const _ed1d151e = () => interopDefault(import('..\\pages\\PostagemSony\\Descontos.vue' /* webpackChunkName: "pages/PostagemSony/Descontos" */))
const _52d48713 = () => interopDefault(import('..\\pages\\PostagemSony\\Genshin.vue' /* webpackChunkName: "pages/PostagemSony/Genshin" */))
const _60d5e958 = () => interopDefault(import('..\\pages\\PostagemSony\\Kingdom.vue' /* webpackChunkName: "pages/PostagemSony/Kingdom" */))
const _6182353a = () => interopDefault(import('..\\pages\\PostagemSony\\Monster.vue' /* webpackChunkName: "pages/PostagemSony/Monster" */))
const _c25ed378 = () => interopDefault(import('..\\pages\\PostagemSony\\StarWars.vue' /* webpackChunkName: "pages/PostagemSony/StarWars" */))
const _26861ff8 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _b0c683a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/control",
    component: _87ec388a,
    name: "control"
  }, {
    path: "/criar-post",
    component: _abf5c998,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _e52d4b86,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _c7749fea,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _534357c4,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _01bde168,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _078a6c93,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _0278ba7a,
    name: "logado"
  }, {
    path: "/login",
    component: _71446147,
    name: "login"
  }, {
    path: "/microsoft",
    component: _d329f568,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _16ef79c7,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _940ae08e,
    name: "sony"
  }, {
    path: "/supermash",
    component: _30282a42,
    name: "supermash"
  }, {
    path: "/trabalhe-conosco",
    component: _3497cd1e,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/AOC",
    component: _3e8493e5,
    name: "Postagem-AOC"
  }, {
    path: "/Postagem/Coringa",
    component: _c4580596,
    name: "Postagem-Coringa"
  }, {
    path: "/Postagem/Cyberpunk",
    component: _2cbd274b,
    name: "Postagem-Cyberpunk"
  }, {
    path: "/Postagem/Lancamento",
    component: _5df84b8c,
    name: "Postagem-Lancamento"
  }, {
    path: "/Postagem/Netflix",
    component: _048fef02,
    name: "Postagem-Netflix"
  }, {
    path: "/Postagem/Pokemon",
    component: _59850fc3,
    name: "Postagem-Pokemon"
  }, {
    path: "/PostagemSony/Descontos",
    component: _ed1d151e,
    name: "PostagemSony-Descontos"
  }, {
    path: "/PostagemSony/Genshin",
    component: _52d48713,
    name: "PostagemSony-Genshin"
  }, {
    path: "/PostagemSony/Kingdom",
    component: _60d5e958,
    name: "PostagemSony-Kingdom"
  }, {
    path: "/PostagemSony/Monster",
    component: _6182353a,
    name: "PostagemSony-Monster"
  }, {
    path: "/PostagemSony/StarWars",
    component: _c25ed378,
    name: "PostagemSony-StarWars"
  }, {
    path: "/post/:id?",
    component: _26861ff8,
    name: "post-id"
  }, {
    path: "/",
    component: _b0c683a0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
