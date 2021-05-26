const initialState = []
const dataReducer = (state=initialState,action) => {
    
         switch (action.type) {

             case 'SETDATA' : {
                 return [...action.payload]
             }

             case 'DELETE' : {
                 return [...action.payload]
             }
         
             default: {
                 return state
             }
                 
         }
}

export default dataReducer