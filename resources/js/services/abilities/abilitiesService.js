import axios from 'axios';

class AbilitiesService {
  constructor() {
    this.baseUrl = 'api/abilities';

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

  async getAbilities() {
    try {
      return await axios.get(this.baseUrl);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AbilitiesService();
