<template>
  <div class="job-details">
    <div class="card job">
      <div class="card-body">
        <div class="card-title">
          <h2>{{ state.job.jobTitle }}</h2>
          <h5 class="card-text">{{ state.job.company }}</h5>
          <h5 class="card-text">
            ${{ state.job.rate }} / Hour, {{ state.job.hours }} Hours / Week
          </h5>
          <p class="card-text">{{ state.job.description }}</p>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="my-2 btn btn-outline-danger"
      @click="deleteJob"
    >
      Delete Listing
    </button>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
export default {
  name: 'JobDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      job: computed(() => AppState.activeJob)
    })
    onMounted(() => {
      jobsService.getJob(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      AppState.activeJob = {}
      next()
    })
    return {
      route,
      state,
      async deleteJob() {
        await jobsService.deleteJob(state.job._id)
        router.push({ name: 'Jobs' })
      }
    }
  },
  components: {}
}
</script>
