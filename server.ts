import { ApiServer } from '../PolicyNodeApi/Server/ApiServer';
import { DatabaseProvider } from '../PolicyNodeApi/Data/DatabaseProvider'; 

import * as log4js from 'log4js'; 

const server = new ApiServer();


server.start(+process.env.PORT || 8000); 


log4js.configure('./log4js.json');

var log = log4js.getLogger("startup");

log.info('server is started'); 



DatabaseProvider.configure({

    type: process.env.DATABASE_TYPE as any || 'mysql',

    database: process.env.DATABASE_NAME || 'insurance',

    username: process.env.DATABASE_USERNAME || 'root',

    password: process.env.DATABASE_PASSWORD || '<your password>',

    host: process.env.DATABASE_HOST || '127.0.0.1',

    port: +process.env.DATABASE_PORT || 3306,

    ssl: !!process.env.USE_SSL

}); 


