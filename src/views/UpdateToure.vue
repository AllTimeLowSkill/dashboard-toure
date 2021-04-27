<template>
  <form @submit.prevent="fetchUpdateToure({ id: toure._id, data: toure })">
    <div class="p-2">
      <label class="form-label" for="">Название</label>
      <input v-model="toure.title" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Цена</label>
      <input v-model="toure.price" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Город</label>
      <input v-model="toure.city" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Отель</label>
      <input v-model="toure.hotel" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Картинка тура</label>
      <input v-model="toure.toure" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Начало тура</label>
      <input v-model="toure.start" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Окончание тура</label>
      <input v-model="toure.end" class="form-control" type="text" />
    </div>
    <div class="form-floating p-2">
      <label for="desc">Описание</label>
      <textarea
        v-model="toure.description"
        class="form-control"
        name="desc"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="d-flex justify-content-between p-2">
      <button class="btn btn-warning" type="submit">Изменить тур</button>
      <router-link class="btn btn-info" to="/">Вернуться назад</router-link>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      toure: 'toure',
    }),
  },

  mounted() {
    this.fetchToure(this.$route.params.id)
  },

  methods: {
    ...mapActions({
      fetchToure: 'fetchToure',
      fetchUpdateToure: 'fetchUpdateToure',
    }),
  },
}
</script>

<style></style>
