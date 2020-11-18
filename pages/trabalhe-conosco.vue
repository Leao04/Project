<template>
  <div>
    <hr />
    <div class="Trabalhe-conosco-grid">
      <div class="Trabalhe-conosco-Titulo">
        <h1>Trabalhe Conosco</h1>
        <h5>Faça parte da equipe do IGN Brasil</h5>
      </div>

      <div class="Trabalhe-conosco-formulario">
        <b-form v-if="show" @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Endereço de email:"
            label-for="input-1"
            description="Nunca compartilharemos seu e-mail com mais ninguém."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Insira o seu e-mail para contato."
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Seu nome completo:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Seu nome completo"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Cargo pretendido:"
            label-for="input-3"
          >
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4" v-model="form.checked">
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Enviar</b-button>
          <b-button type="reset" variant="danger">Limpar</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Selecione um', value: null },
        'Publicidade',
        'Redação',
        'Suporte',
        'Outros',
      ],
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style>
@import '../assets/css/estilo.scss';
</style>
