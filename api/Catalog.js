export const Catalog = ($axios) => ({
  getCatalog(params) {
    return $axios.$get('categories', params)
  },
})
