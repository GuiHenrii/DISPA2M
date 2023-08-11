import wppconnect from "@wppconnect-team/wppconnect";
import fs from "fs";
import dialogoAvalia from "./dialogos/dialogoAvalia.js";

const args = process.argv.slice(2);
console.log(args[0]);
const sessionName = args[0];

wppconnect
  .create({ session: sessionName })
  .then((client) => start(client, 0))
  .catch((error) => {
    console.error("Erro ao criar o cliente Venom:", error);
    process.exit(1); // Termina o processo com um código de erro
  });

async function start(client, index) {
  console.log("iniciado");

  client.onMessage(async (message) => {
    const contatoBot = message.from;
    // if (contatoBot != "5511999722227@c.us") {
    //   console.log("contato diferente");
    //   return;
    // }
  });
  if (message.fromMe) {
    console.log("Mensagem enviada pelo bot:", message.body);

    // Verifique se a mensagem contém o texto desejado
    if (message.body.includes("Vou encerrar o seu atendimento")) {
      // Faça algo quando o bot enviar essa mensagem específica
      console.log("O bot encerrou o atendimento.");
      // Por exemplo, você pode desconectar o bot ou executar outras ações aqui
    }
  }
}

if (
  message.type === "system" ||
  message.content === "Esta mensagem foi excluída"
) {
  // Ignorar mensagens do sistema ou mensagens excluídas
  console.log(
    "Mensagem do sistema ou mensagem excluída recebida:",
    message.body
  );
  return;
}
console.log(message.from);
if (
  message.isGroupMsg === false &&
  message.type === "chat" &&
  isAllowedSender
) {
  console.log("Novo atendimento criado ");
  const cliente = message.body;
  console.log(cliente);
  const mensagem =
    "Olá! Vou dar continuidade do seu atendimento por aqui, sobre a recuperação do valor perdido em consórcio!!";

  const numero = "55" + contatoBot + "@c.us";

  client
    .sendText(cliente, mensagem)
    .then(() => {
      console.log(`Mensagem enviada no número ${numero}`);
    })
    .catch((erro) => {
      console.error("Error when sending: ", erro); //return object error
    });
}
