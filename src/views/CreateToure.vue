<template>
  <form
    @submit.prevent="
      fetchCreateToure({
        title,
        price,
        city,
        hotel,
        toure,
        start,
        end,
        description,
      })
    "
  >
    <div class="p-2">
      <label class="form-label" for="">Название</label>
      <input v-model="title" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Цена</label>
      <input v-model="price" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Город</label>
      <input v-model="city" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Отель</label>
      <input v-model="hotel" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Картинка тура</label>
      <input v-model="toure" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Начало тура</label>
      <input v-model="start" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Окончание тура</label>
      <input v-model="end" class="form-control" type="text" />
    </div>
    <div class="form-floating p-2">
      <label for="desc">Описание</label>
      <textarea
        v-model="description"
        class="form-control"
        name="desc"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="d-flex justify-content-between p-2">
      <button class="btn btn-success" type="submit">Добавить тур</button>
      <router-link class="btn btn-info" to="/">Вернуться назад</router-link>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: '',
      price: 0,
      city: '',
      hotel: '',
      toure: '',
      start: '',
      end: '',
      description: '',
    }
  },
  methods: {
    ...mapActions({
      fetchCreateToure: 'fetchCreateToure',
    }),
  },
}
</script>

<style></style>
