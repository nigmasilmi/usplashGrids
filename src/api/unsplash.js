import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID UBYMyYv7Jle4xrbnXsQyI6PDzy57j_t7Rbmu4kROVYg",
  },
});
