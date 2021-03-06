import React,{useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {startDel} from '../actions/startDel'
import {savedataAction} from '../actions/savedataAction'
import PropTypes from 'prop-types';
import CircularProgressWithLabel from './Wait.js'
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// ];



const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default withRouter(function CustomPaginationActionsTable(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows,setRows] = useState([])

  const dispatch = useDispatch()

  const cryptodata = useSelector((state)=>{   
      return state.data
  })

  useEffect(()=>{
     setRows([...cryptodata])
  },[cryptodata])

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
   
   const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

 const [search,setSearch] = useState('')

  const handleSearch = (e) => {
        setSearch(e.target.value)

     const flist = cryptodata.filter((ele)=>{
          return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
     })
     setRows(flist)
  }

  const handleDel = (id) =>{

     const updatedList = cryptodata.filter((ele)=>{
       return ele.id !== id
     })
  
       dispatch(startDel(updatedList))
  }
  
  const handleSave = (id) => {
    
       const savedData = cryptodata.filter((ele)=>{
            return ele.id === id
       })
       setid(id)
         console.log(...savedData)
       dispatch(savedataAction(savedData))
      //  props.history.push('/view')
  }

  const handleRoute = () => {
     props.history.push('/view')
  }

  const [id,setid] = useState(null)
  return (
      <>
      <h2 style={{marginTop:"30px",textAlign:"center"}}>Crpto-data-list</h2>
        {cryptodata.length !==0 ? <><form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search by name" variant="outlined" value={search} onChange={handleSearch} />
    </form><br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
         <TableHead>
          <TableRow>
            <StyledTableCell>Cypto_Name</StyledTableCell>
            <StyledTableCell align="center">Symbol</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            <StyledTableCell align="center">Save</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.currency}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.price}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <Button variant="contained" color="secondary" onClick={()=>{handleDel(row.id)}}>Delete</Button>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.id === id ?<Button variant="contained" color="primary" onClick={handleRoute}>View</Button> : <Button variant="contained" color="primary" onClick={()=>{handleSave(row.id)}}>Save</Button>}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer></> : <CircularProgressWithLabel/>}
    </>
  );
})
