<template>
  <div class="d-flex flex-column min-vh-100">
    <component :is="navbar" />
    <div class="py-4 min-vh-75">
      <Nuxt />
    </div>
    <SignInModal />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/core/Footer'

export default {
  name: 'MainLayout',
  components: {
    Navbar: () => import('~/components/core/navbar/Navbar'),
    NavbarMobile: () => import('~/components/core/navbar/NavbarMobile'),
    SignInModal: () => import('~/components/core/SignInModal'),
    Footer,
  },
  computed: {
    navbar() {
      return this.$device.isMobileOrTablet ? 'NavbarMobile' : 'Navbar'
    },
  },
}
</script>
