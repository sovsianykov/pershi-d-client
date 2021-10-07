import React from 'react';
import styles from "./Home.module.scss"
import Announcement from "../../components/Annoncement/Announcement";
import { greeting, schedule } from "../../content/announcements";

const Home = () => {
    return (
        <main className={styles.home}>
           <Announcement announcement={ greeting } />
           <Announcement announcement={ schedule } />
        </main>
    );
};

export default Home;