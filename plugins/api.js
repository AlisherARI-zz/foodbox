import { Food } from '~/api/Food'

export default ({ $axios }, inject) => {
  $axios.setBaseURL(process.env.API)

  inject('foodApi', Food($axios))
}
