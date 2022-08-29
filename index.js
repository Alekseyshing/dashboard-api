import http from 'http'

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  //обработка запроса на сервере
  res.statusCode = 200;
  res.setHeader('Content-Type', 'test/plain');
  res.end('Привет');
})

server.listen(port, host, () => {
  console.log(`Сервер запущен на ${host}:${port}`);
})