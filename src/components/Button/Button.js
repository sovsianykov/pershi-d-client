import React from 'react';
import {  makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";





const useStyles = makeStyles((theme) =>({
     root : {
         background: theme.palette.mainGrad,
         color: theme.grey[100],
         textShadow: theme.text.shadow.main,
         margin: "10px 0",
         "&:hover": {
             background: "#51b8e0",
             color: "#fff",
         }
     },
    })
)



const CustomButton = ({children,onClick}) => {
    const classes = useStyles()

    return (
        <Button onClick={onClick} className={classes.root} >
            {children}
        </Button>
    );
};

export default CustomButton;