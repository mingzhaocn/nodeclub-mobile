/**
 * api doc @ https://cnodejs.org/api
 */

import qs from 'qs'

const apiPrefix = 'https://cnodejs.org/api/v1';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

/**
 * 主题首页
 * page Number 页数
 * tab String 主题分类。目前有 ask share job good
 * limit Number 每一页的主题数量
 * mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 * @param {*} param 
 */
export const getTopics = (param = {
  page: 1, tab: '', limit: 10, mdrender: true
}) => fetch(apiPrefix + '/topics?' + qs.stringify(param))
  .then(r => checkStatus(r))
  .then(r => parseJSON(r))
  .catch(err => {
    //TODO: 请求异常处理：怎么反馈给用户，界面如何显示
    console.error('getTopics err:\n' + err)
  })

