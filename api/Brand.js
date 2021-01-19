export const Brand = ($axios) => ({
  getBrand(brandId) {
    return $axios.$get(`/brand/${brandId}`)
  },
})
