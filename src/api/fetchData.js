import {useEffect, useState} from "react";
import axios from "./axios";
import { loadState, saveState } from "../localStorage/localStorage";


export function useFetch() {
    const [ messages, setMessages] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const [ error, setError] = useState(null)
    loadState(messages)
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
    saveState(messages)
    return { messages, isLoading, error }
}