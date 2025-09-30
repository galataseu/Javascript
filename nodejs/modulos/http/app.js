// Importa o modulo http
// const http = require('http');

import http from 'http'

// Cria o server
http.createServer((req, res) => {
  // Define o cabeçalho e o corpo da resposta
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Envia a resposta "Hello World!"
  res.end('Hello World!');
  // Escuta na porta 8080
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');