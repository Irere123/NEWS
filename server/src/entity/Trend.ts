import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity("trends")
export class Trend extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  trend: string;

  @Column({ type: "text", nullable: true })
  sourceUrl: string;

  @Column({ type: "text", nullable: true })
  sourceName: string;

  @CreateDateColumn()
  createdAt: Date;
}
