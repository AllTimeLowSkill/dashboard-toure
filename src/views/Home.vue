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
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

import touresList from '../components/touresList'

export default {
  name: 'Home',
  components: {
    touresList,
  },
  data() {
    return {
      title: '',
    }
  },
  computed: {
    ...mapGetters({
      toures: 'toures',
    }),

    handleSearch() {
      return this.toures.filter((toure) =>
        toure.title.toLowerCase().includes(this.title.toLowerCase())
      )
    },
  },
  mounted() {
    this.fetchToures()
  },
  methods: {
    ...mapActions({
      fetchToures: 'fetchToures',
    }),
  },
}
</script>
<style lang="scss" scoped>
.add-link {
  width: 100%;
}
</style>
