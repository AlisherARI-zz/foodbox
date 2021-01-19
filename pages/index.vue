<template>
  <div>
    <div :class="{ container: !$device.isMobileOrTablet }">
      <Carousel />
    </div>
    <div class="container">
      <div class="row my-4">
        <div class="col-12">
          <SearchForm />
        </div>
      </div>
      <div class="mb-5">
        <div class="row mb-3 align-items-center">
          <div class="col">
            <h2 class="mb-0">Каталог</h2>
          </div>
          <div class="col-auto">
            <b-button
              variant="outline-primary"
              :to="{ name: 'catalog' }"
              :size="$device.isMobileOrTablet ? 'sm' : 'md'"
            >
              Показать еще
            </b-button>
          </div>
        </div>
        <div class="row">
          <div
            v-for="category in homeData.categories"
            :key="category.id"
            class="col-12 col-md-6 col-lg-4 mb-5"
          >
            <CategoryCard :category="category" />
          </div>
        </div>
      </div>

      <div>
        <div class="row mb-3 align-items-center">
          <div class="col">
            <h2 class="mb-0">Рестораны</h2>
          </div>
          <div class="col-auto">
            <b-button
              variant="outline-primary"
              :size="$device.isMobileOrTablet ? 'sm' : 'md'"
              :to="{ name: 'brands' }"
            >
              Показать еще
            </b-button>
          </div>
        </div>
        <div class="row">
          <div
            v-for="brand in homeData.brands"
            :key="brand.id"
            class="col-12 col-md-6 col-lg-4 mb-5"
          >
            <nuxt-link :to="{ name: 'brands-id', params: { id: brand.id } }">
              <RestaurantCard :restaurant="brand" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Carousel: () => import('~/components/home/Carousel'),
    SearchForm: () => import('~/components/core/SearchForm'),
    CategoryCard: () => import('~/components/core/CategoryCard'),
    RestaurantCard: () => import('~/components/core/RestaurantCard'),
  },
  async asyncData({ app, error }) {
    try {
      const homeData = (await app.$homeApi.getHomeData()).data
      return { homeData }
    } catch (e) {}
  },
  data: () => ({
    foodType: 'all',
  }),
}
</script>
