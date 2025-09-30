//export function idade(a) {
   //return 2025 - a;
//};

export function idade(nome, anoNasc, anoAtual){
   idade = anoAtual - anoNasc;
   return `Ola, ${nome}, em ${anoAtual} você tera ${idade} anos.`;
};