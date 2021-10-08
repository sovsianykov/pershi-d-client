import React, {useCallback, useState} from 'react';
import {Button, FormGroup, Input, InputLabel, TextField} from "@material-ui/core";
import styles from './PostForm.module.scss'
import {format} from "date-fns";
import {postData} from "../../api/postData";

const PostForm = () => {
    const [ message, setMessage] =useState({title:"",message:""})
    const changeHandler = useCallback((e) =>{
        setMessage(message => ({...message,[e.target.name]: e.target.value}))
    },[setMessage])
    console.log(message)
    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();

        const currentPost = {
            "title": message.title,
            "message": message.message,
            "date": format(Date.now(),'hh/mm - dd/MM/yy')
        }
          postData(currentPost)
        console.log(currentPost)
        setMessage({title:"",message:""})
    },[message])

    return (
        <form className={styles.formContainer}>
            <InputLabel htmlFor="title" className={styles.labelForm} >
                Титул
                <input className={styles.inputField}
                    type='text'
                       id='title'
                       name= "title"
                       value={message.title}
                       onChange={changeHandler}
                />
            </InputLabel>
            <InputLabel htmlFor="message" className={styles.labelForm} >
                Завдання
                 <input
                     className={styles.inputArea}
                     type='text'
                     id="message"
                     name="message"
                     value={message.message}
                     onChange={changeHandler}
                 />
            </InputLabel>
            <Button color='secondary' type='submit' onClick={onSubmitHandler}  >Submit</Button>

        </form>
    );
};

export default PostForm;