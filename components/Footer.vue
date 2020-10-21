<template>
  <div>
      <div class="rodape">
          <div class="consoles">
              <nuxt-link to="/">Consoles</nuxt-link>
          </div>
          <div class="xbox">
            <nuxt-link to="/">Xbox One</nuxt-link>
            </div>   
            <div class="play">
                <nuxt-link to="/">Playstation 4</nuxt-link>
                </div>       
                <div class="nintendo">
                    <nuxt-link to="/">Wii U</nuxt-link>
                </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
@import "../assets/css/estilo.scss";
</style>