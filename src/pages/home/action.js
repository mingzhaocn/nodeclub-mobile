import { SET_TOPICS } from './actionTypes';
import { getTopics } from '../../api'

export const setTopics = (topics) => ({
  type: SET_TOPICS,
  topics
})

export const loadTopics = (param) => {
  return (dispatch) => {
    return getTopics().then(data => {
      if (data.success) {
        dispatch(setTopics(data.data))
      } else {
        //TODO
      }
    })
  }
}