/**
 * api doc @ https://cnodejs.org/api
 */

import qs from 'qs'

const apiPrefix = 'https://cnodejs.org/api/v1';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export const getTopics = (param = {
  page: 1, tab: '', limit: 10, mdrender: false
}) => fetch(apiPrefix + '/topics?' + qs.stringify(param))
  .then(r => checkStatus(r))
  .then(r => parseJSON(r))
  .catch(err => {
    //TODO: 请求异常处理：怎么反馈给用户，界面如何显示
    console.error('getTopics err:\n' + err)
  })

