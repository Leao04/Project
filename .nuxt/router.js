import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6393e6d1 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _9eff2dcc = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _9f69fa2a = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _7fd51496 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _426046d2 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _febbf0ec = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _53945be2 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _7204d5d4 = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
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
    path: "/",
    component: _920b371a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
