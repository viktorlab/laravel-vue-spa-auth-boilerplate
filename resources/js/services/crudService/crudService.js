import axios from 'axios';

class CrudService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

  async fetch() {
    try {
      return await axios.get(this.baseUrl);
    } catch (error) {
      return error.response.data;
    }
  }

  async create(data) {
    try {
      return await axios.post(this.baseUrl, data);
    } catch (error) {
      return error.response.data;
    }
  }

  async update(data) {
    try {
      return await axios.put(`${this.baseUrl}/${data.id}`, data);
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(id) {
    try {
      return await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      return error.response.data;
    }
  }
}

export default CrudService;
