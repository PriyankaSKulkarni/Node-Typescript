import { Policy } from '../Data/Entities/Policy';

import { PolicyModel } from '../Models/PolicyModel';

import { DatabaseProvider } from '../Data/DatabaseProvider';

import { DeleteResult } from 'typeorm';





export class PolicyService {

    public async getById(id: number): Promise<PolicyModel> {

        const connection = await DatabaseProvider.getConnection();

        return <PolicyModel>await connection.getRepository(Policy).findOneOrFail(id);

    }



    public async create(policy: PolicyModel): Promise<PolicyModel> {



        const newPolicy = new Policy();

        newPolicy.policynumber = policy.policynumber;

        newPolicy.policyholdername = policy.policyholdername;

        newPolicy.isactive = policy.isactive;

        const connection = await DatabaseProvider.getConnection();

        return <PolicyModel>await connection.getRepository(Policy).save(newPolicy);

    }



    public async list(): Promise<PolicyModel[]> {

        const connection = await DatabaseProvider.getConnection();

        return <PolicyModel[]>await connection.getRepository(Policy).find();

    }



    public async update(policy: PolicyModel): Promise<PolicyModel> {

        console.log(policy);

        const connection = await DatabaseProvider.getConnection();

        const repository = connection.getRepository(Policy);

        const entity = await repository.findOneOrFail(policy.id);

        entity.policynumber = policy.policynumber;

        entity.policyholdername = policy.policyholdername;

        entity.isactive = policy.isactive;

        return <PolicyModel>await repository.save(entity);

    }



    public async delete(id: number): Promise<DeleteResult> {

        const connection = await DatabaseProvider.getConnection();

        return await connection.getRepository(Policy).delete(id)

    }

}



export const policyService = new PolicyService();

