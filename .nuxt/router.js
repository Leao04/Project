import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _abf5c998 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _e52d4b86 = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _c7749fea = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _534357c4 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _01bde168 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _078a6c93 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _0278ba7a = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _71446147 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d329f568 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _940ae08e = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _3497cd1e = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
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
    path: "/sony",
    component: _940ae08e,
    name: "sony"
  }, {
    path: "/trabalhe-conosco",
    component: _3497cd1e,
    name: "trabalhe-conosco"
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
