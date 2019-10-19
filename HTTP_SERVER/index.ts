import * as http from 'http'
import * as fs from 'fs'
import * as p from 'path'
const publicDir = p.resolve(__dirname, 'public')
import * as url from 'url'

const server = http.createServer()

server.on('request', (request: http.IncomingMessage, response:http.ServerResponse) => {
  const {method, url: path} = request
  const { pathname, search } = url.parse(path)

  const fileName = pathname.slice(1)
  const fileSuffix = pathname.split('.')[1]
  response.setHeader(`Centent-Type`, `text/${fileSuffix}; charset=utf-8`)
  fs.readFile(p.resolve(publicDir, fileName), (err, data) => {
    if(err) {
      response.statusCode = 404
      response.end()
    } else {
      response.end(data.toString())
    }
  })
})

server.listen(8888)