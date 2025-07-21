import axios from "axios";

const apiKey = "51422808-09cfa7462dc66736a72b15f6d";
const baseUrl = "https://pixabay.com/api/";

export const fetchImg = (query) => {
     return axios.get(baseUrl, {
        params: {
            key: apiKey,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then(response => {
            return response.data.hits
        });
}
