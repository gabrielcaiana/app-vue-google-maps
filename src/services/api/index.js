import axios from '@/utils/axios';
import { GOOGLE_API_KEY } from '/public/config/config.json'

export default class LocationApi {
  async get(lat, long) {
    const response = await axios.get(`json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`);
    return response;
  }
}
