import React, {useCallback, useMemo, useState} from 'react';
import styles from './PostHomeworkModal.module.scss';
import cn from 'classnames'
import {Button, Paper, Typography} from "@material-ui/core";
import PostForm from "../PostForm/PostForm";



const PostHomeworkModal = ({onClick, active}) => {


    const classNames = useMemo(() => cn({
    [styles.modal]: true,
    [styles.modal_active]: active,
        }),[active])
    console.log(active, "modal")
    const onClickHandler = useCallback(()=>{

        onClick()
    },[onClick])

    return (
        <div className={classNames} onClick={onClickHandler} >
            <Paper className={styles.contentModal} onClick={e => e.stopPropagation()} >
                 <PostForm/>
                <Button color='secondary' onClick={onClickHandler} >Закрити</Button>
            </Paper>
        </div>
    );
};

export default PostHomeworkModal;