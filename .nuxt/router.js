import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _90dda0f8 = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _5ee37ae6 = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _2d32af18 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _a8fe3b7a = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _1949126c = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _15f0daf7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _9039b208 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _dbffbfee = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
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
    path: "/criar-post",
    component: _90dda0f8,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _5ee37ae6,
    name: "desconto"
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
    path: "/sony",
    component: _dbffbfee,
    name: "sony"
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
