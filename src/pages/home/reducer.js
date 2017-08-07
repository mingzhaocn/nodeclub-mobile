import { SET_TOPICS } from './actionTypes';

const defaultState = {
  topics: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        topics: [...action.topics]
      }

    default:
      return state
  }
}