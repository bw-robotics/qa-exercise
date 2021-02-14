import React, { useState, useEffect,  } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    addBtn: {
        marginTop: theme.spacing(2)
    }
}));

export default (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography variant="h4" gutterBottom>Feedback</Typography>
            <p>Send us feedback we carry a lot!</p>
            <Button className={classes.addBtn} 
                variant="contained"
                color="primary">Send feedback</Button>
        </Paper>
    )
}
