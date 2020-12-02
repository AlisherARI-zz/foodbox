<template>
  <b-sidebar
    :id="id"
    title="Мой заказ"
    backdrop-variant="dark"
    right
    backdrop
    shadow
  >
    <div
      v-if="!orderList.length"
      class="d-flex justify-content-center align-items-center h-75"
    >
      <div
        class="d-flex flex-column text-center justify-content-center align-items-center px-4"
      >
        <img :src="noData" alt="no data img" width="160" class="mb-3" />
        <span class="h5">Пусто</span>
        <span>Выберите блюда и добавьте их к заказу</span>
      </div>
    </div>
    <div v-else class="p-4">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <span class="d-block">Заказ с ресторана</span>
          <span class="h5">Мерве</span>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-for="food in orderList"
          :key="food.id"
          class="list-group-item bg-transparent px-0"
        >
          <div class="mb-2">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="h5 mb-0">{{ food.name }}</span>
              <button class="btn btn-sm btn-link" @click="removeFood(food.id)">
                Убрать
              </button>
            </div>
          </div>
          <div class="row align-items-end justify-content-between">
            <div class="col-auto">
              <strong class="d-block">Количество</strong>
              <div class="d-flex align-items-center">
                <button class="btn btn-link py-1 px-3">
                  <i class="fas fa-minus"></i>
                </button>
                <strong class="bg-white py-1 px-2 rounded-pill">
                  {{ food.quantity || 1 }}
                </strong>
                <button class="btn btn-link py-1 px-3">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="col-auto">
              <span class="h5">{{ food.price }} с.</span>
            </div>
          </div>
        </li>
        <li class="list-group-item bg-transparent px-0">
          <div class="d-flex justify-content-between">
            <span> Доставка </span>
            <span class="h5 text-danger">+ 10 c</span>
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-between align-items-center">
        <span class="h4 font-weight-normal">Итого</span>
        <span class="h3">{{ totalPrice + 10 }} с.</span>
      </div>
    </div>
    <template v-if="orderList.length" #footer>
      <div class="m-2">
        <button class="btn btn-block btn-lg btn-brand">Оформить заказ</button>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import noData from '~/assets/img/no_data.svg'

export default {
  name: 'MyOrderSidebar',
  props: {
    id: { type: String, default: () => 'default-sidebar' },
  },
  data: () => ({
    noData,
  }),
  computed: {
    ...mapState({
      orderList: (state) => state.cart.orderList,
    }),
    ...mapGetters({
      totalPrice: 'cart/totalPrice',
    }),
  },
  methods: {
    ...mapMutations({
      removeFood: 'cart/REMOVE_FOOD_FROM_ORDER_LIST',
    }),
  },
}
</script>
