// app.js
const express = require('express');
const app = express();

// Middleware para interpretar JSON no body das requisições
app.use(express.json());

// --- ROTAS --- //

// Rota inicial
app.get('/', (req, res) => {
  res.send('🌎 Bem-vindo à API de Teste com Node.js e Express!');
});

// Lista de usuários (simulação em memória)
let usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'João' }
];

// GET - Buscar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET - Buscar um usuário por ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

// POST - Criar novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };

  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
});

// PUT - Atualizar usuário
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  usuario.nome = req.body.nome || usuario.nome;
  res.json({ mensagem: 'Usuário atualizado com sucesso!', usuario });
});

// DELETE - Remover usuário
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ mensagem: `Usuário ${id} removido com sucesso!` });
});

// Tratamento de rota inexistente
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

// --- SERVIDOR --- //
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
