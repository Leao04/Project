<template>
  <div>
    <div class="rodape">
      <div class="consoles">
        <h5>Consoles</h5>
      </div>
      <div class="xbox">
        <nuxt-link to="/microsoft">Microsoft</nuxt-link>
        <hr />
      </div>
      <div class="play">
        <nuxt-link to="/sony">Sony</nuxt-link>
        <hr />
      </div>
      <div class="nintendo2">
        <nuxt-link to="/nintendo">Nintendo</nuxt-link>
        <hr />
      </div>
      <div class="social">
        <h5>Redes Sociais</h5>
      </div>
      <div class="facebook">
        <nuxt-link to="/">Facebook</nuxt-link>
        <hr />
      </div>
      <div class="instagram">
        <nuxt-link to="/">Instagram</nuxt-link>
        <hr />
      </div>
      <div class="ign">
        <h5>IGN Brasil</h5>
      </div>
      <div class="work">
        <nuxt-link to="/trabalhe-conosco">Trabalhe conosco</nuxt-link>
        <hr />
      </div>
      <div class="speak">
        <nuxt-link to="/fale-conosco">Fale conosco</nuxt-link>
        <hr />
      </div>
    </div>
    <div class="final">
      <p>©FATEC - Todos os direitos reservados</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
@import '../assets/css/estilo.scss';
</style>
