<template>
  <div>
    <div class="grid">
      <div class="logo">
        <img
          class="logo"
          src="../assets/img/ign-logo.png"
          alt="Logo da IGN"
          height="100em"
          width="230em"
        />
      </div>
      <div class="sony">
        <nuxt-link to="/sony">Sony</nuxt-link>
      </div>
      <div class="microsoft">
        <nuxt-link to="/microsoft">Microsoft</nuxt-link>
      </div>
      <div class="nintendo">
        <nuxt-link to="/">Nintendo</nuxt-link>
      </div>
      <div class="computador">
        <nuxt-link to="/">Computador</nuxt-link>
      </div>
      <div class="barradebusca">
        <div>
          <b-navbar type="light">
            <b-nav-form>
              <b-form-input
                class="mr-sm-2"
                placeholder="Pesquisar"
              ></b-form-input>
              <b-button
                variant="outline-success"
                class="my-2 my-sm-0"
                type="submit"
                >Buscar</b-button
              >
            </b-nav-form>
          </b-navbar>
        </div>
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
  name: "Header",
};
</script>

<style>
@import "../assets/css/estilo.scss";
</style>
