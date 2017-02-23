import * as request from 'superagent'
import Promise from 'bluebird'

export function httpPost (url, body) {
  return new Promise((resolve, reject) => {
    request
      .post(url)
      .send(body)
      .end((err, res) => err ? reject(err) : resolve(res.body))
  })
}

export function httpGet (url, query) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .query(query)
      .end((err, res) => err ? reject(err) : resolve(res.body))
  })
}
