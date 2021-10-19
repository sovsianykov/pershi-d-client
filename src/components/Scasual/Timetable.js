import React from 'react';
import {format} from "date-fns";
import {TIMETABLE} from "../../content/timetable";
import {createStyles, makeStyles, Paper, Typography} from "@material-ui/core";
import styles from "../Annoncement/Announcement.module.scss";

const useStyles = makeStyles((theme) => {
    return createStyles({
        lesson : {
            margin : "0 auto 0 90px ",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: ".2rem",
            color: theme.palette.lesson
        },
    });
});


const Timetable = ({weekDay,subtitle,date}) => {
    const classes = useStyles()
    return (
        <Paper className={ styles.container }  >
            <Typography variant='h6'  >
              Розклад на {subtitle}
            </Typography>
            <Typography variant='h6'  >
                {TIMETABLE[weekDay].day}  {format(date,'dd/MM/yy')}
            </Typography>
            <Typography variant='subtitle1'  className={classes.lesson} >
                {TIMETABLE[weekDay].lesson_1}
            </Typography>
            <Typography variant='subtitle1'  className={classes.lesson} >
                {TIMETABLE[weekDay].lesson_2}
            </Typography>
            <Typography variant='subtitle1' className={classes.lesson} >
                {TIMETABLE[weekDay].lesson_3}
            </Typography>
            <Typography variant='subtitle1'  className={classes.lesson} >
                {TIMETABLE[weekDay].lesson_4}
            </Typography>
            <Typography variant='subtitle1'  className={classes.lesson} >
                {TIMETABLE[weekDay].lesson_5}
            </Typography>
        </Paper>
    );
};

export default Timetable;