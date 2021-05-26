import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Draggable from 'react-draggable';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight : 'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
      <>
    <Grid container spacing={3} style={{marginTop:'30px'}}>
       <Draggable axis='x'>
      <Grid item xs={4}>
     <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom style={{textAlign:'center'}}>
          Google
        </Typography>
      </CardContent>
    </Card>
    </Grid>
     </Draggable>
        <Draggable axis='x'>
       <Grid item xs={4}>
     <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom style={{textAlign:'center'}}>
          FaceBook
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Draggable>
     <Draggable axis='x'>
    <Grid item xs={4}>
     <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom style={{textAlign:'center'}}>
          Amazon
        </Typography>
      </CardContent>
    </Card>
    </Grid>
      </Draggable>
     </Grid>
    </>
  );
}
