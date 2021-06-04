<template>
  <form @submit.prevent="createCity({ title, cityImg, description })">
    <div class="p-2">
      <label class="form-label" for="">Название</label>
      <input v-model="title" class="form-control" type="text" />
    </div>
    <div class="p-2">
      <label class="form-label" for="">Картинка города</label>
      <input v-model="cityImg" class="form-control" type="text" />
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
      cityImg: '',
      description: '',
    }
  },
  methods: {
    ...mapActions({
      createCity: 'fetchCreateCity',
    }),
  },
}
</script>

<style></style>
