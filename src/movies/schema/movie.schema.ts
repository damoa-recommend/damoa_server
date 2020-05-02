import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  productNo: string;
  
  @Column()
  href: string;
  
  @Column()
  body: string;
  
  @Column()
  category: string;
}