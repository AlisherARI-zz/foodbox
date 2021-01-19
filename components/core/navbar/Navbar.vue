<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    sticky
    class="shadow-sm"
  >
    <div class="container py-2">
      <b-navbar-brand to="/">
        <strong>FoodBOX</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            v-if="!loggedIn && $route.name === 'index'"
            v-b-toggle.my-order-sidebar
            variant="primary"
            class="mr-3"
          >
            <i class="fa fa-shopping-bag mr-2" />
            Мой заказ
            <span v-show="orderListCount">({{ orderListCount }})</span>
          </b-button>
          <b-button
            v-if="!loggedIn"
            v-b-modal.sign-in-modal
            variant="light"
            class="d-flex align-items-center"
          >
            <i class="fa fa-sign-in-alt mr-2" />
            Войти
          </b-button>
          <b-nav-item-dropdown v-else right>
            <!-- Using 'button-content' slot -->
            <template #button-content> User </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
    <MyOrderSidebar id="my-order-sidebar" />
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    MyOrderSidebar: () => import('./MyOrderSidebar'),
  },
  data: () => ({
    loggedIn: false,
  }),
  computed: {
    ...mapGetters({
      orderListCount: 'cart/orderListCount',
    }),
  },
}
</script>

<style scoped></style>
