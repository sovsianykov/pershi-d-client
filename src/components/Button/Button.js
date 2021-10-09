import React from 'react';
import {  makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import  theme  from "../../constants/theme";




const useStyles = makeStyles((theme) =>({
     root : {
         background: "#0e729d",
         color: "#fff",
         margin: "10px 0",
         "&:hover": {
             background: "#51b8e0",
             color: "#fff",
             textShadow: "0 0 3px #000",
         }
     },
    })
)



const CustomButton = ({children,onClick}) => {
    const classes = useStyles(theme)
    return (
        <Button onClick={onClick} className={classes.root} >
            {children}
        </Button>
    );
};

export default CustomButton;