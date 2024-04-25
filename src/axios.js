import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-8d1bc/us-central1/api' // API
});

export default instance;