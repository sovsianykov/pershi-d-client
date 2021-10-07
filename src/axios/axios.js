import axios from "axios";

export const  letPost = axios.create({
    baseURL: 'http://localhost:8000',

});