import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

import { User } from "./User";

@ObjectType()
@Entity("articles")
export class Article extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ type: "text" })
  text: string;

  @Field()
  @Column({ type: "text" })
  title: string;

  @Field()
  @Column({ type: "varchar" })
  category: string;

  @Field()
  @Column({ type: "varchar" })
  tag: string;

  @Field(() => User)
  creator: User;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  creatorId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "creatorId" })
  author: User;
}
