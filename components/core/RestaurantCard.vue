<template>
  <b-card class="lift shadow-sm border-0 h-100">
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="mb-3">
        <span class="d-block h4">{{ restaurant.name }}</span>
        <span :title="restaurant.description">
          {{ restaurant.description }}
        </span>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    restaurant: { type: Object, required: true },
  },
}
</script>

<style scoped></style>
