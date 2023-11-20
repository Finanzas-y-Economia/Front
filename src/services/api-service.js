// En tu archivo api-service.js
import axios from "axios";

const apiUrl = "http://13.59.215.202:8080/users";

export class ApiService {
  async getAll() {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async postData(formData) {
    try {
      const response = await axios.post(apiUrl, formData);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }
}

