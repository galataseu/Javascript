// Importa o modulo fs
// const fs = require('fs');

import fs from 'fs';
// Lê o conteúdo de um arquivo de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Trata erros e exibe o conteúdo do arquivo
    if (err) { 
        // Exibe mensagem de erro no console
        console.error('Erro ao ler o arquivo', err);
        // Retorna para evitar execução adicional
        return;
    }
    // Exibe o conteúdo do arquivo no console
    console.log('Conteúdo do arquivo:', data);
});

// Exibe uma mensagem imediatamente, mostrando a natureza assíncrona do readFile
console.log('Esta mensagem aparce primeiro');

