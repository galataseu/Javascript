import http from 'http';

const PORT = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Home Page</h1>');
    
    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end('<h1>Sobre Nós</h1><p>Está é uma aplicação de exemplo com Node.js</p>');
    } else if (url === '/contato') {    
        response.statusCode = 200;
        response.end('<h1>Fale conosco</h1>');
    } else if (url === '/fotos') {
        response.statusCode = 200;
        response.end('<h1>Nossas Fotos</h1>');
    } else {
        response.statusCode = 404;
        response.end('<h1>404 - Página não encontrada</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});