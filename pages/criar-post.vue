<template>
  <form @submit.prevent="save">
    <input
      v-model="title"
      type="text"
      :placeholder="$t('post.title')"
      :class="titleClass"
      @input="updatedTitle"
    />
    <select
      v-model="author"
      type="text"
      :placeholder="$t('post.author')"
      :class="authorClass"
      @input="updatedAuthor"
    >
      <option value="">{{ ('post.author') }}</option>
      <option v-for="user of users" :key="user._id" :value="user._id">
        {{ user.name }}
      </option>
    </select>
    <textarea
      v-model="content"
      type="text"
      :placeholder="$t('post.content')"
      :class="contentClass"
      @input="updatedContent"
    />
    <button>{{ ('save') }}</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      users: [],
      title: '',
      titleClass: '',
      author: '',
      authorClass: '',
      content: '',
      contentClass: '',
    }
  },

  methods: {
    ...mapActions({
      showMessage: 'messages/showMessage',
    }),

    save() {
      if (!this.isValid()) return false

      this.title = ''
      this.author = ''
      this.content = ''

      this.showMessage({
        message: 'Foi incluído com sucesso!',
        type: 'is-success',
      })
    },

    isValid() {
      this.error = ''
      this.titleClass = ''
      this.authorClass = ''
      this.contentClass = ''

      if (!this.title) {
        this.showMessage({
          message: 'O título é obrigatório!',
          type: 'is-danger',
        })
        this.titleClass = 'has-text-danger'
        return false
      }

      if (!this.author) {
        this.showMessage({
          message: 'O autor é obrigatório!',
          type: 'is-danger',
        })
        this.authorClass = 'has-text-danger'
        return false
      }

      if (!this.content) {
        this.showMessage({
          message: 'O conteúdo é obrigatório!',
          type: 'is-danger',
        })
        this.contentClass = 'has-text-danger'
        return false
      }

      return true
    },

    updatedTitle() {
      this.titleClass = ''
      if (!this.title) this.titleClass = 'has-text-danger'
    },

    updatedAuthor() {
      this.authorClass = ''
      if (!this.author) this.authorClass = 'has-text-danger'
    },

    updatedContent() {
      this.contentClass = ''
      if (!this.content) this.contentClass = 'has-text-danger'
    },
  },
}
</script>
