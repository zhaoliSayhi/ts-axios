type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH '

interface AxiosRequestConfig {
  url: string
  method: Method
  params?: any
  data?: any
  headers?: any
}

export { Method, AxiosRequestConfig }
