import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6393e6d1 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _9eff2dcc = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _2d500868 = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _2f9a79e1 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _9f69fa2a = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _7fd51496 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _426046d2 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _febbf0ec = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _53945be2 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _7204d5d4 = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _0dd4aefb = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _6650ecbb = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _920b371a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6393e6d1,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _9eff2dcc,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _2d500868,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _2f9a79e1,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _9f69fa2a,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _7fd51496,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _426046d2,
    name: "logado"
  }, {
    path: "/login",
    component: _febbf0ec,
    name: "login"
  }, {
    path: "/microsoft",
    component: _53945be2,
    name: "microsoft"
  }, {
    path: "/sony",
    component: _7204d5d4,
    name: "sony"
  }, {
    path: "/trabalhe-conosco",
    component: _0dd4aefb,
    name: "trabalhe-conosco"
  }, {
    path: "/post/:id?",
    component: _6650ecbb,
    name: "post-id"
  }, {
    path: "/",
    component: _920b371a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
