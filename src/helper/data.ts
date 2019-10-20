import { isPlanObject } from './util'

function transformRequest(data: any): any {
  if (isPlanObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export { transformRequest }
