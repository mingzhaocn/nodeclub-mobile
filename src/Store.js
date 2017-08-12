import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import appReducer from './reducer'
import { reducer as homeReducer } from './pages/home'

const reducer = combineReducers({
  app: appReducer,
  home: homeReducer,
})

const middleware = []
middleware.push(thunk)

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
