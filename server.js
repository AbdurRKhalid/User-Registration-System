const http = require("http");
const application = require("./application");
const SERVER_PORT = 8089;

const server = http.createServer(application);

server.listen(SERVER_PORT);
