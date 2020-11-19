<template>
  <div>
    <div>
      <form @submit.prevent="save">
        <input
          v-model="title"
          type="text"
          :placeholder="$t.attr('post.title')"
          :class="titleClass"
          @input="updatedTitle"
        />
        <select
          v-model="author"
          type="text"
          :placeholder="$t.attr('post.author')"
          :class="authorClass"
          @input="updatedAuthor"
        >
          <option value="">{{ $t.attr('post.author') }}</option>
          <option v-for="user of users" :key="user._id" :value="user._id">
            {{ user.name }}
          </option>
        </select>
        <textarea
          v-model="content"
          type="text"
          :placeholder="$t.attr('post.content')"
          :class="contentClass"
          @input="updatedContent"
        />
        <button>{{ $t.attr('save') }}</button>
      </form>
    </div>
  </div>
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
  async fetch() {
    const users = await this.$axios.$get('users')
    this.users = users.sort((a, b) => a.name.localeCompare(b.name))
  },
  methods: {
    ...mapActions({
      showMessage: 'messages/showMessage',
    }),

    save() {
      if (!this.isValid()) return false

      // await this.$axios.$post('posts', {
      //   title: this.title,
      //   content: this.content,
      //   author: this.author,
      // })

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
