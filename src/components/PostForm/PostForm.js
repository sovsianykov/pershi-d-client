import React, {useCallback, useState} from 'react';
import {Button, FormGroup, Input, InputLabel, TextareaAutosize, TextField} from "@material-ui/core";
import styles from './PostForm.module.scss'
import {format} from "date-fns";
import {postData} from "../../api/postData";

const PostForm = () => {
    const [ title, setTitle] =useState('');
    const [ message, setMessage] =useState('');
    const changeMessageHandler = useCallback((e) =>{
        setMessage( e.target.value)
    },[setMessage])
    const changeTitleHandler = useCallback((e) =>{
        setTitle( e.target.value)
    },[setTitle])
    console.log(message)
    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();

        const currentPost = {
            "title": title,
            "message": message,
            "date": format(Date.now(),'hh/mm - dd/MM/yy')
        }
          postData(currentPost)
        console.log(currentPost)
        setMessage("")
        setTitle("")
    },[message,title])

    return (
        <FormGroup className={styles.formContainer}>
            <InputLabel htmlFor="title" className={styles.labelForm} >
                Титул
                <Input className={styles.inputField}
                    type='text'
                       id='title'
                       name= "title"
                       value={title}
                       onChange={changeTitleHandler}
                />
            </InputLabel>
            <InputLabel htmlFor="message" className={styles.labelForm} >
                Завдання
                 <TextareaAutosize
                     className={styles.inputArea}
                     type='text'
                     id="message"
                     name="message"
                     value={message}
                     onChange={changeMessageHandler}
                 />
            </InputLabel>
            <Button color='secondary' type='submit' onClick={onSubmitHandler}  >Submit</Button>

        </FormGroup>
    );
};

export default PostForm;