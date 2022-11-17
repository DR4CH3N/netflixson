const formataData = (data) => {
  // exemplo de data recebida: YYYY-MM-DD ou 2012-11-22
  const dataQuebrada = data.split("-");
  const dia = dataQuebrada[2]; // 22
  const mes = dataQuebrada[1]; // 11
  const ano = dataQuebrada[0]; // 2012
  console.log(data);
  console.log(dia, mes, ano);
  return `${dia}/${mes}/${ano}`;
};
export { formataData };
