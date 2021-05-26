import axios from 'axios'


export const getCrpto = () =>{

    return (dispatch) => {
          axios.get('https://dct-cors.herokuapp.com/api.nomics.com/v1/currencies/ticker?key=e452014e4ea719517836beba67b416361f1806c5&interval=1d&convert=INR')
          .then(res=>{
              console.log(res.data)
              dispatch(setData(res.data))
          })
          .catch((err)=>{
             alert(err.message)
          })
    }
}

export const setData = (data) =>{

    return {
        type : 'SETDATA',
        payload : data
    }
}
