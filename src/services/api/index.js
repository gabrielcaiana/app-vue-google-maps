import axios from '@/utils/axios';
import { GOOGLE_API_KEY } from '/public/config/config.json'

export default class LocationApi {
  async getLocation(lat, lng) {
    const response = await axios.get(`geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`);
    return response;
  }

  async getNearbySearch() {
    const response = await axios.get(`place/nearbysearcg`)
    return response
  }
}
