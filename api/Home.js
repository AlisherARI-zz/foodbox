export const Home = ($axios) => ({
  getHomeData() {
    return $axios.get('home')
  },
})
