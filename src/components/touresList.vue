<template>
  <ul class="list-group mt-2 mb-2">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="(toure, idx) in toures"
      :key="idx"
    >
      <h3>{{ toure.title }}</h3>
      <div class="d-flex">
        <button
          @click="fetchDeleteToure(toure._id)"
          class="btn btn-danger mr-1"
        >
          &times;
        </button>
        <router-link
          class="btn btn-warning"
          :to="{ path: `product/${toure._id}` }"
          >Изменить</router-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['toures'],
  methods: {
    ...mapActions({
      fetchDeleteToure: 'fetchDeleteToure',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
