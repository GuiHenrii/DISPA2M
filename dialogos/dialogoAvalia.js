async function dialogoAvalia(client, message) {
  const texto =
    "*Por favor avalie nosso atendimento em uma escala de 0 a 5*\nSendo 0 para muito ruim e 5 para excelente";

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log("Result: ", "result"); //retorna o objeto de sucesso
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem: ", erro); //retorna o objeto de erro
    });
}

export default dialogoAvalia;
