import { IController } from '../Interfaces/IController';

import { IHttpServer } from '../Interfaces/IHttpServer';

import { Request, Response } from 'restify';

import { PolicyModel } from '../Models/PolicyModel';



export class PolicyController implements IController {

    initialize(httpServer: IHttpServer): void {

        httpServer.get('/policy', this.list.bind(this));

        httpServer.get('/policy/:id', this.getById.bind(this));

        httpServer.put('/policy', this.update.bind(this));

        httpServer.post('/policy', this.create.bind(this));

        httpServer.del('/policy/:id', this.remove.bind(this));

    }



    private async list(req: Request, res: Response): Promise<void> {

        res.send(this.getPolicyData());

    }

    private async getById(req: Request, res: Response): Promise<void> {

        const policy = await this.getPolicyData().find(x => x.id == req.params.id);

        res.send(policy ? 200 : 404, policy);

    }

    private async update(req: Request, res: Response): Promise<void> { }

    private async create(req: Request, res: Response): Promise<void> { }

    private async remove(req: Request, res: Response): Promise<void> { }



    getPolicyData(): PolicyModel[] {

        var policies: PolicyModel[] = [];

        policies.push({ id: 1, policynumber: "7876322", policyholdername: "ABC", isactive: false });

        policies.push({ id: 2, policynumber: "7876323", policyholdername: "PQR", isactive: true });

        policies.push({ id: 3, policynumber: "7876324", policyholdername: "XYZ", isactive: true });

        policies.push({ id: 4, policynumber: "7876325", policyholdername: "Policy1", isactive: true });

        policies.push({ id: 5, policynumber: "7876326", policyholdername: "Policy2", isactive: true });

        return policies;

    }

}

