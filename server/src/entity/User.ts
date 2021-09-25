import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Article } from "./Article";
import { Message } from "./Message";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ type: "text" })
  username: string;

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @Field()
  @Column({ type: "varchar", default: "Reporter" })
  role: string;

  @Field()
  name: string;

  @Field(() => String)
  @CreateDateColumn({ type: "text" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ type: "text" })
  updatedAt: Date;

  @OneToMany(() => Article, (article) => article.author)
  stories: Article[];

  @OneToMany(() => Message, (message) => message.messager)
  messages: Message[];
}
