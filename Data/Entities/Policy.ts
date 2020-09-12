import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity()

export class Policy {



    @PrimaryGeneratedColumn()

    id: number;



    @Column()

    policynumber: string;
    token


    @Column()

    policyholdername: string;



    @Column()

    isactive: boolean;

} 