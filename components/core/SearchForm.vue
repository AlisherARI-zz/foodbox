<template>
  <form>
    <div class="form-group">
      <label for="searchInput" class="d-none">Поиск</label>
      <div class="input-group">
        <input
          id="searchInput"
          type="search"
          class="form-control form-control-lg"
          placeholder="Введите название блюда"
        />
        <div class="input-group-append">
          <b-button variant="brand">
            <i class="fa fa-search"></i>
          </b-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
}
</script>
