<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <div class="container py-4">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/core/navbar/Navbar'
import Footer from '~/components/core/Footer'

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footer,
  },
}
</script>
