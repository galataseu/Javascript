module.exports = {
  gerarMensagemPersonalizada: (nome, idade, favorita) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você tem ${idade}, Você é um(a) ${faixaEtaria}. 
    Sua coisa favorita é ${favorita}.`;
  }
};
