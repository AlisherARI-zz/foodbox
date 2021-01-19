export const Auth = ($axios) => ({
  register() {
    return $axios.$post('auth/sign')
  },
})
