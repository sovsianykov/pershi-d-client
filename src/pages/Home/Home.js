import React from 'react';
import styles from "./Home.module.scss"
import Timetable from "../../components/Scasual/Timetable";
import { format } from "date-fns";






const Home = () => {
  const currentDate = Date.now();
  const toMorrowDate = Date.now() + 86400000
    return (
        <main className={styles.home}>
            <Timetable weekDay={format(currentDate,'EEEE') } subtitle='сьогоднi' date={currentDate}
            />
            <Timetable weekDay={format(toMorrowDate,'EEEE')} subtitle='завтра' date={toMorrowDate}
            />
        </main>
    );
};

export default Home;