import React, { useCallback, useMemo } from 'react';
import styles from "./Navigation.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom"





const NavigationItem= ({
 item,
    onClick,
    active,

}) => {

     const onClickHandler = useCallback(() => {
             onClick(item.id)
     },[item.id, onClick]);

     const classNames = useMemo(()=>cn({
         [styles.navigationItem] : true,
         [styles.navigationItem_active]: active,
     }),[active])


    return (
        <Link className={classNames} onClick={onClickHandler} to={item.path}>
            {item.title}
        </Link>
    );
};

export default NavigationItem;
