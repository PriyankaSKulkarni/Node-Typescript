import { IHttpServer } from './IHttpServer';

export interface IController {

    initialize(httpServer: IHttpServer): void;

} 