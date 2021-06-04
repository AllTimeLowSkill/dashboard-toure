<template>
  <div class="home">
    <input
      v-model="title"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <toures-list :toures="handleSearch" />
    <router-link class="btn btn-success add-link" to="/create"
      >Добавить тур</router-link
    >
    <h2 class="mt-5">Города</h2>
    <cities-list :cities="cities" />
    <router-link class="btn btn-success add-link" to="/createcity"
      >Добавить город</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import CitiesList from '../components/citiesList.vue'

import touresList from '../components/touresList'

export default {
  name: 'Home',
  components: {
    touresList,
    CitiesList,
  },
  data() {
    return {
      title: '',
    }
  },
  computed: {
    ...mapGetters({
      toures: 'toures',
      cities: 'cities',
    }),

    handleSearch() {
      return this.toures.filter((toure) =>
        toure.title.toLowerCase().includes(this.title.toLowerCase())
      )
    },
  },
  mounted() {
    this.fetchToures()
    this.fetchCities()
  },
  methods: {
    ...mapActions({
      fetchToures: 'fetchToures',
      fetchCities: 'fetchCities',
    }),
  },
}
</script>
<style lang="scss" scoped>
.add-link {
  width: 100%;
}
</style>
