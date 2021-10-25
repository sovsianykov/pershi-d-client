import React from 'react';
import styles from "./Announcement.module.scss"
import { Paper, Typography } from "@material-ui/core";

const Announcement = ({ announcement }) => {
    return (
              <Paper className={ styles.container }>
                  <Typography variant='h6' align='center' >
                      {announcement.date}
                  </Typography>
                  <Typography variant='h5' align='center' >
                      {announcement.title}
                  </Typography>
                  <Typography variant='subtitle1' align='center' className={styles.message} >
                      {announcement.message}
                  </Typography>
              </Paper>

    );
};

export default Announcement;