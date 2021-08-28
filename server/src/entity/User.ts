import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Announcement } from "./Announcement";
import { Story } from "./Story";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "text", nullable: true })
  imageUrl: string;

  @Column({ type: "int", default: 0 })
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Story, (story) => story.author)
  stories: Story[];

  @OneToMany(() => Announcement, (ann) => ann.user)
  announcements: Announcement[];
}
