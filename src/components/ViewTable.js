import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {savedataDelAction} from '../actions/savedataDelAction'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

     


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

   const dispatch = useDispatch()
  const savedData = useSelector((state)=>{

        return state.savedData
    })

    const rows = [...savedData]

    const handleDel = (id) =>{

        const delList = savedData.filter((ele)=>{
            return ele.id !== id
        })
        dispatch(savedataDelAction(delList))
    }

  return (
      <>
       <h1 style={{marginTop:'20px'}}>Saved Crpto-data-list</h1>
    {savedData.length !==0 && <TableContainer component={Paper} style={{marginTop:'30px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
           <TableRow>
            <StyledTableCell>Cypto_Name</StyledTableCell>
            <StyledTableCell align="center">Symbol</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.currency}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" color="secondary" onClick={()=>{handleDel(row.id)}}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </>
  );
}
