import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reactotron from '../ReactotronConfig'

// reducers
import PlacesReducer from './places.reducer'

const RootReducer = combineReducers({
    places: PlacesReducer
})

export default createStore(RootReducer, 
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
    )
)

