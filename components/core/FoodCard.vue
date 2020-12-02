<template>
  <b-card
    img-top
    img-src="https://www.delivery-club.ru/media/cms/id_product/31635/318441105_m650.jpg?resize=fit&width=650&height=272&gravity=ce&out=webp"
    img-alt="Изображение еды"
    class="lift shadow-sm border-0 h-100"
  >
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="mb-3">
        <span class="d-block h5">{{ food.name }}</span>
        <span :title="food.description">
          {{ food.description }}
        </span>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span class="h3 mb-0"> {{ food.price }} с. </span>
        <b-button v-if="foodInCart" disabled type="button" variant="light">
          Добавлено
        </b-button>
        <b-button v-else variant="brand" @click="add">
          Добавить к заказу
        </b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FoodCard',
  props: {
    food: { type: Object, required: true },
  },
  computed: {
    ...mapState({
      orderList: (state) => state.cart.orderList,
    }),
    foodInCart() {
      return !!this.orderList.find((order) => order.id === this.food.id)
    },
  },
  methods: {
    ...mapMutations({
      addToOrderList: 'cart/ADD_FOOD_TO_ORDER_LIST',
    }),
    add() {
      this.addToOrderList(this.food)
    },
  },
}
</script>
