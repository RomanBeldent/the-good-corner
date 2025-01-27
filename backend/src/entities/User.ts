import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    hashedPassword: string;

    @Column({ default: "USER" })
    role: string;

    @Field(() => [Ad])
    @OneToMany(() => Ad, (ad) => ad.user, {
        cascade: true
    })
    ads: Ad[];
} 