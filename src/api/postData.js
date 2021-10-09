import axios from "./axios";

export function postData(data) {
    try {


        axios.post("/save/message", data ).then(res => console.log(res.data))
    } catch (e) {
        console.log(e.message)
    }
}