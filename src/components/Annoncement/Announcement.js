import React from 'react';
import styles from "./Announcement.module.scss"
import { Paper, Typography } from "@material-ui/core";

const Announcement = ({announcement}) => {
    return (

              <Paper className={ styles.container }>
                  <Typography variant='h4' align='center' >
                      {announcement.title}
                  </Typography>
                  <Typography variant='subtitle1' align='center' >
                      {announcement.body}
                  </Typography>
              </Paper>

    );
};

export default Announcement;