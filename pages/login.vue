<template>
  <div>
    <hr />
    <div class="form">
      <form @submit.prevent="loginUser">
        <input v-model="email" type="email" placeholder="E-mail" />
        <input v-model="password" type="password" placeholder="Senha" />
        <button>Acessar</button>
      </form>
    </div>
    <br />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    loginUser() {
      if (
        this.email === 'lordvergil12345@outlook.com' &&
        this.password === '123'
      ) {
        this.setUser({
          login: this.email,
          password: this.password,
        })
        this.$router.push('/logado')
      }
    },
  },
}
</script>
