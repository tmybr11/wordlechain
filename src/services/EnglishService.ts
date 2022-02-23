import axios from 'axios'
import ExternalVocabulary from './ExternalVocabulary'

class EnglishService implements ExternalVocabulary {
  async random() {
    return await axios.get('http://localhost:3030/daily');
  }

  async valid(word: string) {
    return await axios.get('https://wordsapiv1.p.rapidapi.com/words/' + word, {
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'a0e75427f8mshca0940d5eee3816p16a549jsnf05b0b7dcd7b'
      }
    });
  }
}

export default EnglishService;