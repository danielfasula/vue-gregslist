import { AppState } from '../AppState'
import { sandboxApi } from './AxiosService'

class JobsService {
  async getJobs() {
    try {
      const res = await sandboxApi.get('jobs/')
      AppState.jobs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getJob(id) {
    try {
      const res = await sandboxApi.get('jobs/' + id)
      AppState.activeJob = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(rawJob) {
    try {
      const res = await sandboxApi.post('jobs', rawJob)
      AppState.jobs.push(res.data)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async deleteJob(id) {
    try {
      await sandboxApi.delete('jobs/' + id)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()
