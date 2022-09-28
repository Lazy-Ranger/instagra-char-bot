const predictMessage = ["hi", "hello", "hey"];
const predictMessage2 = ["how are you", "how r u?", "how are you"];

function replyMessage(predictMessage) {
  return predictMessage[Math.floor(Math.random() * predictMessage.length)];
}

function replyMessageBot(content) {
  const [sender, message] = content.split(" ");
  const text = message.toLocaleLowerCase().trim();
  if (predictMessage.includes(text)) {
    return replyMessage(predictMessage);
  } else if (predictMessage2.includes(text)) {
    return "I am good what about you?";
  }
}

module.exports = {
  replyMessageBot,
};
