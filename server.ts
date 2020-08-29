import { ApiServer } from '../PolicyNodeApi/Server/ApiServer';

import * as log4js from 'log4js'; 

const server = new ApiServer();


server.start(+process.env.PORT || 8000); 


log4js.configure('./log4js.json');

var log = log4js.getLogger("startup");

log.info('server is started'); 


