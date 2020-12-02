<template>
  <div>
    <Carousel />
    <div class="card mb-4">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'all' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'all'"
            >
              Все
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'burgers' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'burgers'"
            >
              Бургеры
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'sushi' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'sushi'"
            >
              Суши
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'pizza' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'pizza'"
            >
              Пицца
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'deserts' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'deserts'"
            >
              Десерты
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'shashlik' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'shashlik'"
            >
              Шашлык
            </button>
          </div>
          <div class="col-auto pr-0">
            <button
              class="btn rounded-pill"
              :class="foodType === 'breackfast' ? 'btn-brand' : 'btn-light'"
              @click="foodType = 'breackfast'"
            >
              Завтраки
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <SearchForm />
      </div>
    </div>
    <div>
      <h2 class="mb-3">Популярные блюда</h2>
      <div class="row">
        <div
          v-for="(food, index) in foodList"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-5"
        >
          <FoodCard :food="food" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-button variant="light" block> Показать еще... </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Carousel: () => import('~/components/home/Carousel'),
    FoodCard: () => import('~/components/core/FoodCard'),
    SearchForm: () => import('~/components/core/SearchForm'),
  },
  async asyncData({ app, error }) {
    try {
      const foodList = await app.$foodApi.getFoodList()
      return {
        foodList,
      }
    } catch (e) {}
  },
  data: () => ({
    foodType: 'all',
  }),
}
</script>
