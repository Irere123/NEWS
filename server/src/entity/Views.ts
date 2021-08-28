import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  Column,
} from "typeorm";

@Entity("views")
export class View extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  storyId: string;

  @Column({ type: "text", nullable: true })
  longitude: string;

  @Column({ type: "text", nullable: true })
  latitude: string;

  @Column({ type: "text", nullable: true })
  tag: string;

  @Column({ type: "text", nullable: true })
  category: string;

  @CreateDateColumn()
  createdAt: Date;
}
