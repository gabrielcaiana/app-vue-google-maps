import axios from '@/utils/axios';

export default class LocationApi {
  async get(lat, long) {
    const response = await axios.get(`json?latlng=${lat},${long}&key=AIzaSyCRbYgbtycDCiow_LKuFYSqmslzuVB2a5o`);
    return response;
  }
}
