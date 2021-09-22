import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity("advertisements")
export class Advertisement extends BaseEntity {
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
  @Column({ type: "text", nullable: true })
  link: string;

  @Field()
  @Column({ type: "text", nullable: true })
  image: string;

  @Field()
  @Column({ type: "varchar" })
  advertiser: string;

  @Field(() => Int)
  @Column({ type: "varchar" })
  paidAmount: number;

  @Field()
  @Column({ type: "bool", default: false })
  expired: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
