import { createReadStream, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const project = resolve(fileURLToPath(new URL('..', import.meta.url)))
const root = resolve(project, 'dist')
const port = Number(process.env.PORT || 3000)
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error(`Invalid PORT: ${process.env.PORT}`)
statSync(resolve(root, 'index.html'))

const server = createServer((request, response) => {
  let pathname
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  } catch {
    response.writeHead(400).end('Bad request')
    return
  }

  const filePath = resolve(root, `.${pathname}`)
  if (filePath !== root && !filePath.startsWith(root + sep)) {
    response.writeHead(404).end('Not found')
    return
  }

  let file
  try {
    file = statSync(filePath).isDirectory() ? resolve(filePath, 'index.html') : filePath
    if (!file.startsWith(root + sep) && file !== resolve(root, 'index.html')) throw new Error('Invalid path')
    if (!statSync(file).isFile()) throw new Error('Not a file')
  } catch {
    response.writeHead(404).end('Not found')
    return
  }

  response.setHeader('Content-Type', mime[extname(file).toLowerCase()] || 'application/octet-stream')
  response.setHeader('Cache-Control', 'no-cache')
  const stream = createReadStream(file)
  stream.on('error', () => {
    if (!response.headersSent) response.writeHead(404)
    response.end('Not found')
  })
  stream.pipe(response)
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} on http://0.0.0.0:${port}`)
})
