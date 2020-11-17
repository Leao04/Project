import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _401fe1d5 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _b55ba24c = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _e7d9c13a = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _0ec71b9e = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _5fc82e6a = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _f45840fc = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _75dfcdad = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _0efd9120 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _1f171de1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6cf9e4e6 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _15993eed = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _26f0d7df = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _06b709dc = () => interopDefault(import('..\\pages\\supermash.vue' /* webpackChunkName: "pages/supermash" */))
const _25d50c44 = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _5782ba62 = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _05d600dc = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _556f7aca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _401fe1d5,
    name: "control"
  }, {
    path: "/criar-post",
    component: _b55ba24c,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _e7d9c13a,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _0ec71b9e,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _5fc82e6a,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _f45840fc,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _75dfcdad,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _0efd9120,
    name: "logado"
  }, {
    path: "/login",
    component: _1f171de1,
    name: "login"
  }, {
    path: "/microsoft",
    component: _6cf9e4e6,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _15993eed,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _26f0d7df,
    name: "sony"
  }, {
    path: "/supermash",
    component: _06b709dc,
    name: "supermash"
  }, {
    path: "/trabalhe-conosco",
    component: _25d50c44,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/Coringa",
    component: _5782ba62,
    name: "Postagem-Coringa"
  }, {
    path: "/post/:id?",
    component: _05d600dc,
    name: "post-id"
  }, {
    path: "/",
    component: _556f7aca,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
