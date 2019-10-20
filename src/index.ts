import { AxiosRequestConfig } from './types'
import { buildURL } from './helper/url'
import { transformRequest } from './helper/data'
import { processHeaders } from './helper/headers'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * 处理请求 URL
 * @param config
 */
function transformURL(config: AxiosRequestConfig): string {
  const { params, url } = config
  return buildURL(url, params)
}

/**
 * 处理请求 body
 * @param config
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
