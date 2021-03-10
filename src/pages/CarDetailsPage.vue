<template>
  <div class="car-details">
    <h1>WElcome to the details page</h1>
    <img :src="state.car.imgUrl" alt="" />
    <h2>{{ state.car.make }} {{ state.car.model }}</h2>
    <h4>{{ state.car.description }}</h4>
    <button type="button" class="btn btn-outline-danger" @click="deleteCar">
      Delete Car
    </button>

    <form class="form-inline" @submit.prevent="editCar">
      <div class="form-group">
        <input
          type="text"
          name="make"
          id="make"
          class="form-control"
          placeholder="Make"
          aria-describedby="helpId"
          v-model="state.car.make"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="model"
          id="model"
          class="form-control"
          placeholder="Model"
          aria-describedby="helpId"
          v-model="state.car.model"
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
          v-model="state.car.year"
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
          v-model="state.car.price"
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
          v-model="state.car.description"
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
          v-model="state.car.imgUrl"
        />
      </div>
      <button class="btn btn-info" type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
export default {
  name: 'CarDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      car: computed(() => AppState.activeCar)
    })
    onMounted(() => {
      carsService.getCar(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      AppState.activeCar = {}
      next()
    })
    return {
      route,
      state,
      async deleteCar() {
        await carsService.deleteCar(state.car._id)
        router.push({ name: 'Cars' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
