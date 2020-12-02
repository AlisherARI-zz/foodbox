<template>
  <b-modal
    id="sign-in-modal"
    hide-header
    hide-footer
    centered
    @hidden="clearForm"
  >
    <span class="h4 d-block mb-3">Вход</span>
    <form id="sign-in-form" @submit.prevent="login">
      <div class="form-group">
        <label for="sign-in-email">Эл.Почта</label>
        <div class="input-group is-invalid">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fa fa-envelope"></i>
            </div>
          </div>
          <input
            id="sign-in-email"
            v-model="$v.user.email.$model"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': emailErrors.length }"
            placeholder="почта@mail.ru"
          />
        </div>
        <ValidationErrors :errors="emailErrors" />
      </div>
      <div class="form-group">
        <label for="sign-in-password">Пароль</label>
        <div class="input-group is-invalid">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fa fa-lock"></i>
            </div>
          </div>
          <input
            id="sign-in-password"
            v-model="$v.user.password.$model"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': passwordErrors.length }"
            placeholder="******"
          />
        </div>
        <ValidationErrors :errors="passwordErrors" />
      </div>
      <div class="form-group">
        <b-form-checkbox v-model="user.remember_me">
          Запомнить меня
        </b-form-checkbox>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-auto pr-0">
            <button class="btn btn-brand" form="sign-in-form">Войти</button>
          </div>
          <div class="col-auto">
            <nuxt-link
              :to="{ name: 'sign-up' }"
              class="btn btn-link"
              tag="button"
            >
              Регистрация
            </nuxt-link>
          </div>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'SignInModal',
  data: () => ({
    user: {
      email: '',
      password: '',
      remember_me: false,
    },
    submitted: false,
    emailError: [],
    passwordError: [],
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
    },
  },
  computed: {
    emailErrors() {
      const errors = [...this.emailError]
      if (this.submitted && !this.$v.user.email.required) {
        errors.push('Почта обязательна для заполнения')
      }
      if (this.submitted && !this.$v.user.email.email) {
        errors.push('Неверный формат почты')
      }
      return errors
    },
    passwordErrors() {
      const errors = [...this.passwordError]
      if (this.submitted && !this.$v.user.password.required) {
        errors.push('Пароль обязателен для заполнения')
      }
      if (this.submitted && !this.$v.user.password.minLength) {
        errors.push('Пароль должен содержать не менее 6 символов')
      }
      if (this.submitted && !this.$v.user.password.maxLength) {
        errors.push('Пароль должен содержать не более 20 символов')
      }
      return errors
    },
  },
  watch: {
    $route() {
      this.$bvModal.hide('sign-in-modal')
    },
  },
  methods: {
    login() {
      this.submitted = true
      if (this.$v.user.$invalid) {
        this.$v.user.$touch()
      }
    },
    clearForm() {
      this.user.email = ''
      this.user.password = ''
      this.submitted = false
    },
  },
}
</script>
