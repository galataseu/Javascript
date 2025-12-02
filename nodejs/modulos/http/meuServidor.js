// native-server.js

// 1. Importar o módulo http nativo do Node.js
import http from 'http';

const port = 3000;
const host = 'localhost';

// Dados de exemplo (simulando um banco de dados)
const usuarios = [
  { id: 1, nome: 'Ana Silva' },
  { id: 2, nome: 'Carlos Souza' },
];

// 2. Criar o servidor
// A função passada para createServer é executada a cada requisição que chega.
const server = http.createServer((req, res) => {
  // --- Lógica de Roteamento Manual ---

  // Rota: GET /usuarios
  if (req.url === '/usuarios' && req.method === 'GET') {
    // 3. Configurar os cabeçalhos da resposta
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // 4. Finalizar a resposta, enviando os dados (convertidos para string JSON)
    res.end(JSON.stringify(usuarios));

  // Rota: POST /usuarios
  } else if (req.url === '/usuarios' && req.method === 'POST') {
    let body = '';

    // 5. Lidar com o corpo da requisição (que chega em "chunks")
    // Node.js trabalha com streams, então os dados chegam em pedaços.
    req.on('data', (chunk) => {
      body += chunk.toString(); // Concatena cada pedaço de dado
    });

    // Quando todos os "chunks" chegarem, o evento 'end' é disparado
    req.on('end', () => {
      try {
        const novoUsuario = JSON.parse(body);
        // Aqui você adicionaria o usuário ao "banco de dados"
        console.log('Novo usuário recebido:', novoUsuario);
        
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Usuário criado com sucesso!', data: novoUsuario }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Erro: JSON inválido' }));
      }
    });

  // Rota: GET / (Página inicial)
  } else if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bem-vindo ao meu servidor nativo Node.js!');
  
  // Rota não encontrada
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Página Não Encontrada');
  }
});

// 6. Iniciar o servidor e fazê-lo "escutar" por requisições
server.listen(port, host, () => {
  console.log(`Servidor nativo rodando em http://${host}:${port}`);
});