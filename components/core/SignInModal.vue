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
        <label for="sign-in-phone">Тел.номер</label>
        <div class="input-group is-invalid">
          <span class="input-icon">
            <span class="font-like-h5 mb-n1">
              <i class="fa fa-phone"></i>
            </span>
          </span>
          <the-mask
            id="sign-in-phone"
            v-model="$v.user.phone.$model"
            type="tel"
            class="form-control form-control-lg form-control-with-icon"
            :class="{ 'is-invalid': submitted && phoneErrors.length }"
            mask="## ### ## ##"
            :masked="false"
            placeholder="99 999 99 99"
          />
        </div>
        <ValidationErrors
          v-if="submitted && phoneErrors.length"
          :errors="phoneErrors"
        />
      </div>
      <div class="form-group">
        <label for="sign-in-password">Пароль</label>
        <div class="input-group is-invalid">
          <span class="input-icon">
            <span class="font-like-h5 mb-n1">
              <i class="fa fa-lock"></i>
            </span>
          </span>
          <input
            id="sign-in-password"
            v-model="$v.user.password.$model"
            :type="passwordType"
            class="form-control form-control-lg form-control-with-icon"
            :class="{ 'is-invalid': submitted && passwordErrors.length }"
            placeholder="******"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <span
                style="cursor: pointer"
                :class="`fa ${
                  passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'
                }`"
                @click="changePasswordType"
              ></span>
            </div>
          </div>
        </div>
        <ValidationErrors
          v-if="submitted && passwordErrors.length"
          :errors="passwordErrors"
        />
      </div>
      <div class="form-group">
        <b-form-checkbox v-model="user.remember_me">
          Запомнить меня
        </b-form-checkbox>
      </div>
      <div class="form-group">
        <div class="d-flex align-items-center">
          <button
            class="btn btn-primary mr-2"
            form="sign-in-form"
            :disabled="loading"
          >
            <b-spinner v-show="loading" small variant="light" class="mr-2" />
            Войти
          </button>
          <nuxt-link
            :to="{ name: 'sign-up' }"
            class="btn btn-link"
            tag="button"
            :disabled="loading"
          >
            Регистрация
          </nuxt-link>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { generateErrors } from '~/assets/utils/generators'

export default {
  name: 'SignInModal',
  components: { TheMask },
  data: () => ({
    user: {
      phone: '',
      password: '',
      remember_me: false,
    },
    submitted: false,
    passwordType: 'password',
    errors: {
      phone: [],
      password: [],
    },
    loading: false,
  }),
  validations: {
    user: {
      phone: {
        required,
        minLength: minLength(9),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      remember_me: {},
    },
  },
  computed: {
    phoneErrors() {
      return generateErrors(
        'тел.номер',
        {
          required: this.$v.user.phone.required,
          minLength: { value: this.$v.user.phone.minLength, length: 9 },
        },
        this.errors.phone
      )
    },
    passwordErrors() {
      return generateErrors(
        'пароль',
        {
          required: this.$v.user.password.required,
          minLength: { value: this.$v.user.password.minLength, length: 6 },
          maxLength: { value: this.$v.user.password.maxLength, length: 20 },
        },
        this.errors.password
      )
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
      this.loading = true
      const data = { ...this.user }
      data.phone = `998${data.phone}`
      this.$auth
        .loginWith('local', { data })
        .then(() => {
          this.$bvModal.hide('sign-in-modal')
        })
        .finally(() => (this.loading = false))
    },
    clearForm() {
      this.user.phone = ''
      this.user.password = ''
      this.submitted = false
    },
    changePasswordType() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
  },
}
</script>
