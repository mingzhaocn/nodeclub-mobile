import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import appRreducer from './reducer'
import { reducer as homeRreducer } from './pages/home'

const reducer = combineReducers({
  app: appRreducer,
  home: homeRreducer,
})

const middleware = []
middleware.push(thunk)

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
