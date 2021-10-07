import React from "react";
import styles from "./MainGrid.module.scss";

import { Grid } from "@material-ui/core";
import GridItem from "./GridItem";



const MainGrid = ({images}) => {



  return (
   <Grid container className={styles.mainGrid}>
       {images.map((image) => <Grid key={image.id} xs={12} md={4} lg={3}   >
           <GridItem image={image} />
       </Grid> )}
   </Grid>
  );
}
export default MainGrid;
