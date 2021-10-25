import React from "react";

import styles from "./MainGrid.module.scss";

const GridItem = ({ image }) => {
  return (
    <>
      <div className={styles.imageFrame}>
        <img src={image.src} alt={image.title} className={styles.picture} />
      </div>
    </>
  );
};

export default GridItem;
