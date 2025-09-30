// Importa o modulo os
const os = require('os');

// Exibe informações do sistema
console.log('Arquitetura do sistema:', os.arch())
// Exibe a Quantidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().length)
// Exibe a Memória total em bytes
console.log('Memória total (bytes):', os.totalmem())
// Exibe a Memória livre em bytes
Console.log('Memória livre (bytes):', os.freemem())
// Exibe o sistema operacional
console.log(os.platform())