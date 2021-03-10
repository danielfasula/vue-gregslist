<template>
  <div class="houses-page container">
    <div class="row">
      <div class="col text-center">
        <h1>Houses</h1>
      </div>
    </div>
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
            v-model="state.newHouse.bedrooms"
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
            v-model="state.newHouse.bathrooms"
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
            v-model="state.newHouse.levels"
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
            v-model="state.newHouse.price"
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
            v-model="state.newHouse.description"
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
            v-model="state.newHouse.year"
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
            v-model="state.newHouse.imgUrl"
          />
        </div>
        <button class="my-3 btn btn-info" type="submit">Create Listing</button>
      </form>
    </div>
    <div class="row">
      <House v-for="house in state.houses" :key="house._id" :house="house" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
import House from '../components/House'
import { useRouter } from 'vue-router'

export default {
  name: 'HousePage',
  setup() {
    const router = useRouter()
    const state = reactive({
      houses: computed(() => AppState.houses),
      newHouse: {}
    })
    onMounted(() => {
      housesService.getHouses()
    })
    return {
      state,
      async createHouse() {
        const houseId = await housesService.createHouse(state.newHouse)
        router.push({ name: 'HouseDetails', params: { id: houseId } })
        state.newHouse = {}
      }
    }
  },
  components: {
    House
  }
}
</script>
