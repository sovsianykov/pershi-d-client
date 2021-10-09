import {useEffect, useState} from "react";
import axios from "./axios";


export function useFetch() {
    const [ messages, setMessages] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const [ error, setError] = useState(null)

    useEffect(() => {
        try {
            setIsLoading(true)
            axios("/retrieve/conversation")
                .then(res =>{
                    setMessages(res.data)
                    setIsLoading(false)
                }).catch(e => setError(e.message))
        } catch (e) {
            console.log(e.message)
        }
    },[])
    return { messages, isLoading, error }
}