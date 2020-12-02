<template>
  <b-carousel
    v-model="slide"
    :interval="5000"
    controls
    indicators
    img-height="330"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      v-for="(image, index) in images"
      :key="index"
      class="bg-light"
    >
      <template #img>
        <a href="/" target="_blank">
          <img
            :src="image"
            class="carousel-img"
            alt="Изображение баннера"
            rel="noopener noreferrer"
          />
        </a>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import banner1 from '~/assets/img/banner-1.jpg'
import banner2 from '~/assets/img/banner-2.jpg'

export default {
  name: 'Carousel',
  data: () => ({
    slide: 0,
    sliding: null,
  }),
  computed: {
    images() {
      return [banner1, banner2]
    },
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped></style>
