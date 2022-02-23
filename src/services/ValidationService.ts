import axios from 'axios'

class ValidationService {
  async valid(word: string) {
    return await axios.get('http://localhost:3030/validate', {
      params: {
        word: word
      }
    });
  }
}

export default ValidationService;