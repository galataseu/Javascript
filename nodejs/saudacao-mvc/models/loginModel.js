module.exports = {
  gerarMensagemPersonalizada: (email, login, nome) => {
    let email1 = "Santiago@email.com"
    let senha1 = "12345"

    if (email == email1 & login == senha1) {
        verificacao = "usuário está autenticado"
    } else {
        verificacao = "usuário não está autenticado"
    }

    return `Olá, ${nome}, seu ${verificacao}. `;
  }
};
