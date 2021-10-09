import React, {useCallback, useMemo} from 'react';
import cn from 'classnames'
import {Button, Paper } from "@material-ui/core";
import PostForm from "../PostForm/PostForm";
import { makeStyles } from "@material-ui/core";

const useStyles  = makeStyles(() => ({
     modal:{
         width:"100%",
         height: "100vh",
         position: "fixed",
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         top: 0,
         left: 0,
         background:"rgba(0, 0, 0, 0.46)",
         opacity: 0,
         pointerEvents:"none",

     },
    contentModal : {
        width:"400px",
        minHeight:"400px",
        background:"white",
        borderRadius:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        transform:"scale(0.5)",
        transition: ".7s ease-in-out",
    },
      modalActive : {
        pointerEvents:"all",
        opacity: 1,
          '& $contentModal' : {
              transform: "scale(1)",
              transition: ".7s ease-in-out",
          }

    },


}))




const PostHomeworkModal = ({onClick, active}) => {
    const classes = useStyles()

    const classNames = useMemo(() => cn({
    [classes.modal]: true,
    [classes.modalActive]: active,
        }),[active])
    const onClickHandler = useCallback(()=>{

        onClick()
    },[onClick])

    return (
        <div className={classNames} onClick={onClickHandler} >
            <Paper className={classes.contentModal} onClick={e => e.stopPropagation()} >
                 <PostForm/>
                <Button color='secondary' onClick={onClickHandler} >Закрити</Button>
            </Paper>
        </div>
    );
};

export default PostHomeworkModal;