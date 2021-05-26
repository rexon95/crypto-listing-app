import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import dataReducer from '../reducers/dataReducer'
import savedDataReducer from '../reducers/savedDataReducer'

const configureStore = () =>{

    const store = createStore(combineReducers({
           
            data : dataReducer,

            savedData : savedDataReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore

