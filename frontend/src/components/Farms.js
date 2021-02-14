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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { api } from '../config'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 650
    },
    addBtn: {
        marginTop: theme.spacing(2)
    }
}));

export default (props) => {
    const classes = useStyles();
    const [farms, setFarms] = useState([])
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = React.useState({
        name: '',
        size: '',
        geo: {
            lat: 0,
            lon: 0
        },
        tractors: [],
        updated: new Date()
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const submitForm = async () => {
        const response = await axios.post(api.farms, form)
        if (response.status === 200) {
            await getFarms()
            setOpen(false)            
        } 
        else {
            console.error('Something wrong...')
        }
    }

    const getFarms = async () => {
        const response = await axios.get(api.farms)
        setFarms(response.data)
    }

    const deleteFarm = farmId => async (event) => {
        const response = await axios.delete(api.farms + '/' + farmId)
        if (response.status === 200) {
            await getFarms()
        } 
        else {
            console.error('Something wrong...')
        }
    }

    useEffect(async () => {
        await getFarms()
    }, [])

    return (
        <div>
            <Paper className={classes.paper} elevation={2}>
                <Typography variant="h4" gutterBottom>Farms</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">Geolocation</TableCell>
                            <TableCell align="right">Tractors</TableCell>
                            <TableCell align="right">Last update time</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {farms.map((farm, index) => (
                            <TableRow key={farm.name}>
                            <TableCell component="th" scope="row">
                                {farm.name}
                            </TableCell>
                            <TableCell align="right">{farm.size}</TableCell>
                            <TableCell align="right">{farm.geo}</TableCell>
                            <TableCell align="right">{farm.tractors}</TableCell>
                            <TableCell align="right">{farm.updated}</TableCell>
                            <TableCell align="right">
                                <Button onClick={deleteFarm(farm._id)} color="secondary">
                                    X
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handleClickOpen} className={classes.addBtn} variant="contained" color="primary">Add farm</Button>
            </Paper>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New farm</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Fill the data and send the form
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                value={form.name}
                fullWidth
                onChange={handleInputChange}
            />
            <TextField
                margin="dense"
                name="size"
                label="Size"
                fullWidth
                onChange={handleInputChange}
            />
            <TextField
                margin="dense"
                name="geo"
                label="Geolocation"
                type="string"
                fullWidth
                onChange={handleInputChange}
            />
            <TextField
                margin="dense"
                name="tractors"
                label="Tractors"
                type="string"
                fullWidth
                onChange={handleInputChange}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={submitForm} color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}
