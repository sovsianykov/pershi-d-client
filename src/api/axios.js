import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pershii-d.herokuapp.com/'

})

export default instance;