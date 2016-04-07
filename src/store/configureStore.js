import {applyMiddleware,compose,createStore} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import INITIAL_STATE from '../constants/app'

const finalCreateStore = compose(
    applyMiddleware(thunk,logger())
)(createStore)

export default (initialState=INITIAL_STATE) =>{
    return finalCreateStore(rootReducer,initialState)
}
