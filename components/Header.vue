<template>
  <div>
    <div class="grid">
      <div class="logo">
        <nuxt-link to="/">
          <img
            class="logo"
            src="../assets/img/ign-logo.png"
            alt="Logo da IGN"
            height="100em"
            width="230em"
          />
        </nuxt-link>
      </div>
      <div class="sony">
        <nuxt-link to="/sony">Sony</nuxt-link>
      </div>
      <div class="microsoft">
        <nuxt-link to="/microsoft">Microsoft</nuxt-link>
      </div>
      <div class="nintendo">
        <nuxt-link to="nintendo">Nintendo</nuxt-link>
      </div>
      <div class="blog">
        <nuxt-link to="/">Blog</nuxt-link>
      </div>
      <div class="login">
        <nuxt-link to="/login">
          <b-button variant="outline-primary">Login</b-button>
        </nuxt-link>
        <b-button variant="outline-primary">Sair</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
@import '../assets/css/estilo.scss';
</style>
