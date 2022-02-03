import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { currencyReducer } from './reducers/currencyReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
   currencyModule: currencyReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// console.log('store:', store)
window.myStore = store
