export const Food = ($axios) => ({
  getFoodList() {
    return $axios.$get('/cat1')
  },
})
