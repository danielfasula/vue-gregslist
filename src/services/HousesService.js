import { AppState } from '../AppState'
import { sandboxApi } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await sandboxApi.get('houses')
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getHouse(id) {
    try {
      const res = await sandboxApi.get('houses/' + id)
      AppState.activeHouse = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawHouse) {
    try {
      const res = await sandboxApi.post('houses', rawHouse)
      AppState.houses.push(res.data)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try {
      await sandboxApi.delete('houses/' + id)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()
