import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31029d2a = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _90dda0f8 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _5ee37ae6 = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _771df05b = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _44261414 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _2d32af18 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _a8fe3b7a = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _1949126c = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _15f0daf7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _9039b208 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _5a146217 = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _dbffbfee = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _51a04bf2 = () => interopDefault(import('..\\pages\\supermash.vue' /* webpackChunkName: "pages/supermash" */))
const _6db7656e = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _829744d6 = () => interopDefault(import('..\\pages\\Postagem\\AOC.vue' /* webpackChunkName: "pages/Postagem/AOC" */))
const _eeb12236 = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _9f0a260a = () => interopDefault(import('..\\pages\\Postagem\\Cyberpunk.vue' /* webpackChunkName: "pages/Postagem/Cyberpunk" */))
const _76026aec = () => interopDefault(import('..\\pages\\Postagem\\Lancamento.vue' /* webpackChunkName: "pages/Postagem/Lancamento" */))
const _21393e9c = () => interopDefault(import('..\\pages\\Postagem\\Netflix.vue' /* webpackChunkName: "pages/Postagem/Netflix" */))
const _44588173 = () => interopDefault(import('..\\pages\\Postagem\\Pokemon.vue' /* webpackChunkName: "pages/Postagem/Pokemon" */))
const _3b018aac = () => interopDefault(import('..\\pages\\postagemNintendo\\ghostrunner.vue' /* webpackChunkName: "pages/postagemNintendo/ghostrunner" */))
const _20d66aef = () => interopDefault(import('..\\pages\\postagemNintendo\\mario.vue' /* webpackChunkName: "pages/postagemNintendo/mario" */))
const _29d01025 = () => interopDefault(import('..\\pages\\postagemNintendo\\temtem.vue' /* webpackChunkName: "pages/postagemNintendo/temtem" */))
const _0121d9c9 = () => interopDefault(import('..\\pages\\postagemNintendo\\zelda.vue' /* webpackChunkName: "pages/postagemNintendo/zelda" */))
const _6f1639be = () => interopDefault(import('..\\pages\\PostagemSony\\Descontos.vue' /* webpackChunkName: "pages/PostagemSony/Descontos" */))
const _4390be7a = () => interopDefault(import('..\\pages\\PostagemSony\\Genshin.vue' /* webpackChunkName: "pages/PostagemSony/Genshin" */))
const _5af82504 = () => interopDefault(import('..\\pages\\PostagemSony\\Kingdom.vue' /* webpackChunkName: "pages/PostagemSony/Kingdom" */))
const _5aa1ff13 = () => interopDefault(import('..\\pages\\PostagemSony\\Monster.vue' /* webpackChunkName: "pages/PostagemSony/Monster" */))
const _7fd0b294 = () => interopDefault(import('..\\pages\\PostagemSony\\StarWars.vue' /* webpackChunkName: "pages/PostagemSony/StarWars" */))
const _47fe41a8 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _4c4937e0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _31029d2a,
    name: "control"
  }, {
    path: "/criar-post",
    component: _90dda0f8,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _5ee37ae6,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _771df05b,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _44261414,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _2d32af18,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _a8fe3b7a,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _1949126c,
    name: "logado"
  }, {
    path: "/login",
    component: _15f0daf7,
    name: "login"
  }, {
    path: "/microsoft",
    component: _9039b208,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _5a146217,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _dbffbfee,
    name: "sony"
  }, {
    path: "/supermash",
    component: _51a04bf2,
    name: "supermash"
  }, {
    path: "/trabalhe-conosco",
    component: _6db7656e,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/AOC",
    component: _829744d6,
    name: "Postagem-AOC"
  }, {
    path: "/Postagem/Coringa",
    component: _eeb12236,
    name: "Postagem-Coringa"
  }, {
    path: "/Postagem/Cyberpunk",
    component: _9f0a260a,
    name: "Postagem-Cyberpunk"
  }, {
    path: "/Postagem/Lancamento",
    component: _76026aec,
    name: "Postagem-Lancamento"
  }, {
    path: "/Postagem/Netflix",
    component: _21393e9c,
    name: "Postagem-Netflix"
  }, {
    path: "/Postagem/Pokemon",
    component: _44588173,
    name: "Postagem-Pokemon"
  }, {
    path: "/postagemNintendo/ghostrunner",
    component: _3b018aac,
    name: "postagemNintendo-ghostrunner"
  }, {
    path: "/postagemNintendo/mario",
    component: _20d66aef,
    name: "postagemNintendo-mario"
  }, {
    path: "/postagemNintendo/temtem",
    component: _29d01025,
    name: "postagemNintendo-temtem"
  }, {
    path: "/postagemNintendo/zelda",
    component: _0121d9c9,
    name: "postagemNintendo-zelda"
  }, {
    path: "/PostagemSony/Descontos",
    component: _6f1639be,
    name: "PostagemSony-Descontos"
  }, {
    path: "/PostagemSony/Genshin",
    component: _4390be7a,
    name: "PostagemSony-Genshin"
  }, {
    path: "/PostagemSony/Kingdom",
    component: _5af82504,
    name: "PostagemSony-Kingdom"
  }, {
    path: "/PostagemSony/Monster",
    component: _5aa1ff13,
    name: "PostagemSony-Monster"
  }, {
    path: "/PostagemSony/StarWars",
    component: _7fd0b294,
    name: "PostagemSony-StarWars"
  }, {
    path: "/post/:id?",
    component: _47fe41a8,
    name: "post-id"
  }, {
    path: "/",
    component: _4c4937e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
