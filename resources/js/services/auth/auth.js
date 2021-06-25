import axios from 'axios';

class Auth {
  constructor() {
    this.baseUrl = 'api/login';
  }

  async login(requestBody) {
    try {
      return await axios.post(this.baseUrl, requestBody);
    } catch (error) {
      return error.response.data;
    }
  }
}

export default new Auth();
