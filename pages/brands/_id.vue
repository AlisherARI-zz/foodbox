<template>
  <div>
    <div>
      <img
        src="data:image/png;base64,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"
        alt="Brand bg"
        class="card-img bg-light"
        style="max-height: 250px; object-fit: contain; height: auto"
      />
    </div>
    <h1>Самбуса №1</h1>
    <div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        accusantium asperiores aspernatur blanditiis consectetur corporis
        cupiditate eaque eligendi eos excepturi, fugiat, id, libero pariatur
        perferendis perspiciatis quam voluptates? Deserunt in maxime natus
        nesciunt omnis? Accusamus amet perspiciatis quasi quod repudiandae.
      </span>
    </div>
    <div class="row">
      <div class="col-12 col-md-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  layout: 'main',
  async asyncData({ app, error, params }) {
    try {
      const brand = await app.$brandsApi.getBrand(params.id)
      return { brand }
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Сервис не найден',
      })
    }
  },
}
</script>
