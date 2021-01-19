<template>
  <b-card
    img-top
    img-src="https://www.delivery-club.ru/media/cms/id_product/31635/318441105_m650.jpg?resize=fit&width=650&height=272&gravity=ce&out=webp"
    img-alt="Изображение еды"
    class="lift shadow-sm border-0 h-100"
  >
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="mb-3">
        <span class="d-block h4">{{ category.name }}</span>
        <span :title="category.description">
          {{ category.description }}
        </span>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: { type: Object, required: true },
  },
}
</script>
