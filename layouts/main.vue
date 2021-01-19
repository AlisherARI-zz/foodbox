<template>
  <div class="d-flex flex-column min-vh-100">
    <component :is="navbar" />
    <div class="container py-4">
      <div class="row min-vh-80">
        <div class="col-12 col-md">
          <Nuxt />
        </div>
        <div v-if="!$device.isMobileOrTablet" class="col-12 col-md-auto">
          <StaticSidebar />
        </div>
      </div>
    </div>
    <SignInModal />
    <Footer />
  </div>
</template>

<script>
import StaticSidebar from '~/components/core/navbar/StaticSidebar'
import Footer from '~/components/core/Footer'

export default {
  name: 'MainLayout',
  components: {
    Navbar: () => import('~/components/core/navbar/Navbar'),
    NavbarMobile: () => import('~/components/core/navbar/NavbarMobile'),
    SignInModal: () => import('~/components/core/SignInModal'),
    Footer,
    StaticSidebar,
  },
  computed: {
    navbar() {
      return this.$device.isMobileOrTablet ? 'NavbarMobile' : 'Navbar'
    },
  },
}
</script>
