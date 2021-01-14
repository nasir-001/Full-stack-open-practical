import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'

const reducer = combineReducers({
    notes: noteReducer,
    filterReducer: filterReducer
})

const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

// export default initialNotes = () => {
//     return async dispatch => {
//         const notes = await note
//     }
// }

export default store