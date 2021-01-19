<template>
  <b-navbar type="dark" variant="primary" sticky class="shadow-sm">
    <b-navbar-nav class="mr-2">
      <b-button v-b-toggle.sidebar-mobile variant="link" class="text-light p-1">
        <i class="fas fa-bars font-like-h3"></i>
      </b-button>
      <b-sidebar
        id="sidebar-mobile"
        title="Sidebar with backdrop"
        backdrop
        shadow
      >
      </b-sidebar>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item to="/">
        <h4 class="mb-0 text-light">FoodBox</h4>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-b-modal.sign-in-modal>
        <span class="text-light"> Войти </span>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarMobile',
}
</script>

<style scoped></style>
