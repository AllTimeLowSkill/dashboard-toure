<template>
  <ul class="list-group mt-3 mb-2">
    <li
      v-for="(city, idx) in cities"
      :key="idx"
      class="list-group-item list-group-item d-flex justify-content-between"
    >
      <h3>{{ city.title }}</h3>
      <button @click="deleteCity(city._id)" class="btn btn-danger">
        &times;
      </button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['cities'],
  methods: {
    ...mapActions({
      deleteCity: 'fetchDeleteCity',
    }),
  },
}
</script>

<style></style>
