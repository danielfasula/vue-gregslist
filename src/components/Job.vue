<template>
  <div class="col-4">
    <router-link :to="{ name: 'JobDetails', params: { id: job._id } }">
      <div class="card job">
        <div class="card-body">
          <div class="card-title">
            <h2>{{ job.jobTitle }}</h2>
            <h5 class="card-text">{{ job.company }}</h5>
            <h5 class="card-text">
              ${{ job.rate }} / Hour, {{ job.hours }} Hours / Week
            </h5>
            <p class="card-text">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: {
    job: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.job:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer;
}
.job {
  transition: all 0.2s;
  background-color: black;
  color: white;
}
</style>
