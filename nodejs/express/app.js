import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utg-8");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Sobre Nós</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Fale Conosco</h1>");
});

app.use((req, res) => {
    res.status(404).send("<h1>Essa pagina nao existe seu OTARIO/h1>");
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});