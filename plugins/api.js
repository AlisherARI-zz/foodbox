import { Food } from '~/api/Food'
import { Brand } from '~/api/Brand'
import { Auth } from '~/api/Auth'
import { Home } from '~/api/Home'
import { Catalog } from '~/api/Catalog'

export default ({ $axios }, inject) => {
  $axios.setBaseURL(process.env.BACKEND_API)
  $axios.setHeader('Content-type', 'application/json')
  $axios.setHeader('Accept', 'application/json')

  inject('authApi', Auth($axios))
  inject('foodApi', Food($axios))
  inject('brandsApi', Brand($axios))
  inject('homeApi', Home($axios))
  inject('catalogApi', Catalog($axios))
}
