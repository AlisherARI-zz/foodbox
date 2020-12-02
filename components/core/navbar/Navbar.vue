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
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'services' }" active-class="active">
            <i class="fa fa-utensils mr-1" />
            Рестораны и кафе
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            v-if="!loggedIn"
            v-b-toggle.my-order-sidebar
            variant="brand"
            class="mr-2"
          >
            <i class="fa fa-shopping-bag mr-1" />
            Мой заказ
            <span v-show="orderListCount">({{ orderListCount }})</span>
          </b-button>
          <b-nav-item
            v-if="!loggedIn"
            v-b-modal.sign-in-modal
            href="javascript:;"
          >
            <i class="fa fa-sign-in-alt mr-1" />
            Войти
          </b-nav-item>
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
    <SignInModal />
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    SignInModal: () => import('~/components/core/SignInModal'),
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
