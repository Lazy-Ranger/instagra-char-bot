const Insta = require("@androz2091/insta.js");
const { INSTA_CONFIG } = require("../../../config");
const { replyMessageBot } = require("./utils");

class InstaApi {
  static instaChatBot() {
    // Create an instance of a Instagram client
    const client = new Insta.Client();

    client.on("connected", () => {
      console.log("I am ready!", client.user.username);
    });

    // Create an event listener for messages
    client.on("messageCreate", (message) => {
      const textToReply = replyMessageBot(message.content);
      if (textToReply) {
        message.reply(textToReply);
      }
    });

    // Log our bot in using Instagram credentials
    client.login(INSTA_CONFIG.USER_NAME, INSTA_CONFIG.PASSWORD);
  }
}

const INSTA_API = InstaApi;

module.exports = {
  INSTA_API,
};
