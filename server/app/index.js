const express = require("express");
const { APP_CONFIG } = require("../config");
const cors = require("cors");
const morgan = require("morgan");
const { join } = require("path");
const http = require("http");
const socketio = require("socket.io");
const { INSTA_API } = require("../app/modules/chat/user.chat");

class ExpressApp {
  constructor() {
    this._app = express();
    // this._instaBot = INSTA_API.instaChatBot();
    this._server = http.createServer(this._app);
    this._io = socketio(this._server);
  }

  async start() {
    /**
     * _Premiddlewares
     */

    this._app.use(morgan(APP_CONFIG.LOGGER_TYPE));
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));

    this._io.on("connection", (sockets) => {
      console.log(sockets.id);
    });

    this._app.listen(APP_CONFIG.PORT, () => {
      console.log(`App is listining at ${APP_CONFIG.PORT}`);
    });
  }
}

module.exports = {
  ExpressApp,
};
