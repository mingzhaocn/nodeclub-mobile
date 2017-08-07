import {
  SELECT_TAB
} from './actionTypes'

const defaultState = {
  selectedTab: 'home'
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        selectedTab: action.selectedTab
      }

    default:
      return state
  }
}