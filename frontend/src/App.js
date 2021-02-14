import './App.css';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tractors from './components/Tractors'
import Farms from './components/Farms'
import Feedback from './components/Feedback'

import { green, purple } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  title: {
      marginTop: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
      primary: green,
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography className={classes.title} gutterBottom variant="h2">Welcome to <strong>Barnyard!</strong></Typography>
        <Tractors />
        <Farms />
        <Feedback />
      </ThemeProvider>
    </Container>
  );
}

export default App;
