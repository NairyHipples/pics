import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 09f6c749be6b1e092187863fc7988c3844a83d2be474072ffa3d4bd22d23ccd5"
  }
});
