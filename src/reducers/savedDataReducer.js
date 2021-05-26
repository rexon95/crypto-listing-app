const initialState = []
const savedDataReducer = (state=initialState,action) => {
    
         switch (action.type) {

             case 'SAVEDATA' : {
                 return [...action.payload, ...state]
             }
             case 'DEL-SAVED' : {
                 return [...action.payload]
             }
         
             default: {
                 return state
             }
                 
         }
}

export default savedDataReducer