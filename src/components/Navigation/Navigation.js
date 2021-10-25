import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { navigation } from "../../content/content";
import NavigationItem from "./NavigationItem";
import { useMediaQuery, useTheme } from "@material-ui/core";
import NavigationDrawer from "./NavigationDrawer";

const Navigation = () => {
  const [activeId, setActiveID] = useState(1);
  const onClickHandler = (id) => {
    setActiveID(id);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <nav className={styles.navigation}>
      {isMatch ? (
        <NavigationDrawer />
      ) : (
        <div className={styles.container}>
          {navigation.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              onClick={onClickHandler}
              active={activeId === item.id}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
