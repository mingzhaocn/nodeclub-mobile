import { SET_TOPICS, SET_TOPICS_PARAM } from './actionTypes';
import { getTopics } from '../../api'

export const setTopics = (topics) => ({
  type: SET_TOPICS,
  topics
})

export const setTopicsParam = (param) => ({
  type: SET_TOPICS_PARAM,
  topicsParam: { ...param }
})

export const loadTopics = (param) => {
  return (dispatch) => {
    return getTopics(param).then(data => {
      if (data.success) {
        dispatch(setTopics(data.data))
        dispatch(setTopicsParam(param))
      } else {
        //TODO
      }
    })
  }
}