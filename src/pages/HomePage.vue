<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col">
        <h1>Welcome to Gregslist please select your collection to look at</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <img
          src="https://i.kym-cdn.com/photos/images/newsfeed/001/062/268/f71.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({})
    return {
      state
    }
  },
  components: {
  }
}
</script>

<style>
.col img {
  max-height: 80%;
}
</style>
