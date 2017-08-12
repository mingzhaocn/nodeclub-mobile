import { SET_TOPICS, SET_TOPICS_PARAM } from './actionTypes';

const defaultState = {
  topics: [],
  //TODO topicsParam 应该放在 action 初始化还是这里？
  topicsParam: {
    page: 0,
    tab: '',
    limit: 10,
    mdrender: true
  }
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        topics: [...action.topics]
      }
    case SET_TOPICS_PARAM:
      return {
        ...state,
        topicsParam: { ...state.topicsParam, ...action.topicsParam }
      }
    default:
      return state
  }
}