import { isPlanObject } from './util'

function normalizeHeaderNames(headers: any, normalizeName: string): void {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

function processHeaders(headers: any, data: any): any {
  normalizeHeaderNames(headers, 'Content-Type')

  if (isPlanObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export { processHeaders }
