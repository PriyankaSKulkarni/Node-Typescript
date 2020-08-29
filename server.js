"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiServer_1 = require("../PolicyNodeApi/Server/ApiServer");
const log4js = require("log4js");
const server = new ApiServer_1.ApiServer();
server.start(+process.env.PORT || 8000);
log4js.configure('./log4js.json');
var log = log4js.getLogger("startup");
log.info('server is started');
//# sourceMappingURL=server.js.map