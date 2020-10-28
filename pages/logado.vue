<template>
  <div>
    <div>
      <section class="section">
        <h2 class="title is-3 has-text-grey">
          "Just start <b-icon icon="rocket" size="is-large" />"
        </h2>
        <p>Usuário logado: {{ login }}</p>
        <h3 class="subtitle is-6 has-text-grey">
          Autor: <a :href="author.github">{{ author.name }}</a>
        </h3>
      </section>
    </div>
    <div>
      <nuxt-link to="/criar-post">
        <button>Publicar</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      author: {
        github: 'https://github.com/Leao04',
        name: 'Victor Leão Dal Rovere',
      },
    }
  },
  computed: {
    ...mapState({
      login: (state) => state.user.login,
    }),
  },
  beforeMount() {
    if (!this.login) {
      this.$router.push('/login')
    }
  },
}
</script>
