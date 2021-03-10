<template>
  <div class="house-details">
    <h1>Welcome to the House details page</h1>
    <div class="card">
      <img class="card-img-top" :src="state.house.imgUrl" alt="house" />
      <div class="card-body">
        <h4 class="card-title">{{ state.house.price }}</h4>
        <p class="card-text">
          {{ state.house.bedrooms }} bedrooms |
          {{ state.house.bathrooms }} bathrooms
        </p>
        <p class="card-text">
          {{ state.house.levels }} Level(s) | {{ state.house.year }} year
        </p>
      </div>
    </div>

    <button type="button" class="btn btn-outline-danger" @click="deleteHouse">
      Delete House
    </button>

    <div class="row my-3">
      <form class="form-inline" @submit.prevent="createHouse">
        <div class="form-group">
          <input
            type="text"
            name="bedrooms"
            id="bedrooms"
            class="form-control"
            placeholder="Bedrooms"
            aria-describedby="helpId"
            v-model="state.house.bedrooms"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="bathrooms"
            id="bathrooms"
            class="form-control"
            placeholder="Bathrooms"
            aria-describedby="helpId"
            v-model="state.house.bathrooms"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="levels"
            id="levels"
            class="form-control"
            placeholder="Levels"
            aria-describedby="helpId"
            v-model="state.house.levels"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="price"
            id="price"
            class="form-control"
            placeholder="Price"
            aria-describedby="helpId"
            v-model="state.house.price"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            placeholder="Description"
            aria-describedby="helpId"
            v-model="state.house.description"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="year"
            id="year"
            class="form-control"
            placeholder="Year"
            aria-describedby="helpId"
            v-model="state.house.year"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            class="form-control"
            placeholder="ImgUrl"
            aria-describedby="helpId"
            v-model="state.house.imgUrl"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'

export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })
    onMounted(() => {
      housesService.getHouse(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      AppState.activeCar = {}
      next()
    })
    return {
      state,
      route,
      async deleteHouse() {
        await housesService.deleteHouse(state.house._id)
        router.push({ name: 'Houses' })
      }
    }
  },
  components: {}
}
</script>
