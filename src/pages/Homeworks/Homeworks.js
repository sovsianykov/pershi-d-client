import React, {useCallback, useState} from 'react';
import styles from "./Homeworks.module.scss"
import PostHomeworkModal from "../../components/PostHomeworkModal/PostHomeworkModal";
import  Button  from "../../components/Button/Button";
import {useFetch} from "../../api/fetchData";
import Announcement from "../../components/Annoncement/Announcement";


const Homeworks = () => {
    const [active, setActive] = useState(false);
    const onClickHandler = useCallback(()=>{
        setActive(!active)
    },[active])

    const { error , isLoading, messages} = useFetch();
    if (isLoading) {
        return <h4> Loading...</h4>
    }
    if (error) {
        return <h4>{error}</h4>
    }

    return (
        <div className={styles.homeWork}>
            <Announcement announcement={messages[messages.length - 1] }/>
            <PostHomeworkModal active={active} onClick={onClickHandler}/>
            { active ? "" :    <Button
                variant='contained'
                className={styles.btn}
                onClick={onClickHandler}>Додати завдання</Button> }
        </div>
    );
};

export default Homeworks;