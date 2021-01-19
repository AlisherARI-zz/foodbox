<template>
  <form>
    <div class="form-group">
      <label for="searchInput" class="d-none">Поиск</label>
      <div class="input-group">
        <span class="input-icon">
          <span class="h5 mb-0">
            <i class="fa fa-search"></i>
          </span>
        </span>
        <input
          id="searchInput"
          type="search"
          class="form-control form-control-with-icon as-left-rounded"
          :class="{ 'form-control-lg': !$device.isMobileOrTablet }"
          placeholder="Введите название блюда"
        />
        <div class="input-group-append">
          <b-button
            variant="primary"
            :size="$device.isMobileOrTablet ? 'sm' : ''"
          >
            Найти
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
