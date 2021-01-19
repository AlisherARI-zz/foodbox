<template>
  <div>
    <h1 class="mb-5">Каталог</h1>
    <div class="row">
      <div
        v-for="category in catalog.categories"
        :key="category.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <CategoryCard :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main',
  components: {
    CategoryCard: () => import('~/components/core/CategoryCard'),
  },
  async asyncData({ app, error }) {
    try {
      const catalog = await app.$catalogApi.getCatalog()
      return { catalog }
    } catch (e) {
      error({
        message: e.response.data.message,
        statusCode: e.response.status || 500,
      })
    }
  },
}
</script>

<style scoped></style>
