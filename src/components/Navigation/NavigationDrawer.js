import React, { useCallback, useState} from "react";
import {Button, Drawer} from "@material-ui/core";
import {navigation} from "../../content/content";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.scss";



const NavigationDrawer = () => {
   const [open , setOpen] = useState(false);
    const [activeId, setActiveID] = useState(1);


   const onClickHandler = useCallback((id) => {
       setOpen(!open)
       setActiveID(id)
   },[open])




  return (<nav className={styles.navigation}>
      <div className={styles.container}>
      <Button onClick={onClickHandler} style={{color : "#fff",letterSpacing:"0.1rem" }} >Menu</Button>
       <Drawer open={open} anchor={"top"} onClose={() =>setOpen(false)}
               className={styles.container_drawer}
       >

               {navigation.map((item) => (
                   <NavigationItem key={item.id} item={item} onClick={onClickHandler}
                                   active={activeId === item.id}
                   />
               ))}

       </Drawer>
  </div>
       </nav>);
};

export default NavigationDrawer;
