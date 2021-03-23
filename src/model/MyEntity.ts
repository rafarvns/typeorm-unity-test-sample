import { PrimaryGeneratedColumn, Column } from "typeorm";
import { Entity } from "typeorm";

@Entity()
export class MyEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;
}
