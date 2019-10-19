import * as http from 'http'
import * as fs from 'fs'
import * as p from 'path'
const publicDir = p.resolve(__dirname, 'public')

const server = http.createServer()

server.on('request', (request: http.IncomingMessage, response:http.ServerResponse) => {
  const {method, url} = request
  switch (url) {
    case '/index.html':
      fs.readFile(p.resolve(publicDir, 'index.html'), (err, data) => {
        if(err) throw err;
        response.end(data.toString())
      })
      break;
    case '/style.css' :
      response.setHeader('Centent-Type', 'text/css; charset=utf-8')
      fs.readFile(p.resolve(publicDir, 'style.css'), (err, data) => {
        if(err) throw err
        response.end(data.toString())
      })
      break;
    case '/main.js' :
      response.setHeader('Centent-Type', 'text/javascript; charset=utf-8')
      fs.readFile(p.resolve(publicDir, 'main.js'), (err, data) => {
        if(err) throw err
        response.end(data.toString())
      })
      break;
    default:
      break;
  }
})

server.listen(8888)