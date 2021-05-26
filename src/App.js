import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route,Switch,Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {getCrpto} from './actions/startGetcrpto'
import Home from './components/Home'
import View from './components/View'
import Cards from './components/Cards'
import TestApp from './components/TestApp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
   const classes = useStyles();
   const dispatch = useDispatch()

   useEffect(()=>{
     dispatch(getCrpto())
   },[])

  return (
     <Container>
     <AppBar position="static">
    <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Crpto-data-app
    </Typography>
    <Button color="inherit"><Link to="/home" style={{color:'white'}}>Home</Link></Button>
    <Button color="inherit"><Link to="/view" style={{color:'white'}}>View</Link></Button>
    
  </Toolbar>
</AppBar>
          <TestApp/>
         <Switch>
              <Route path="/home" component={Home} exact={true}/>
              <Route path="/view" component={View} exact={true}/>
         </Switch>
    </Container>
  );
}

export default App;
