import React, {useCallback, useState} from 'react';
import styles from "./Homeworks.module.scss"
import PostHomeworkModal from "../../components/PostHomeworkModal/PostHomeworkModal";
import { Button } from "@material-ui/core";

const Homeworks = () => {
    const [active, setActive] = useState(false);
    const onClickHandler = useCallback(()=>{
        setActive(!active)
    },[active])
    return (
        <div className={styles.homeWork}>
            <PostHomeworkModal active={active} onClick={onClickHandler}/>
            <Button
                variant='contained'
                color='primary'
                className={styles.btn}
                onClick={onClickHandler}>Додати завдання</Button>
        </div>
    );
};

export default Homeworks;