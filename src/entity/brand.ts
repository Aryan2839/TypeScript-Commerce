import {Entity, PrimaryGeneratedColumn,Column,OneToMany,JoinColumn} from "typeorm";
import { Category } from "./category.js";
import { Product } from "./product.js";

@Entity({name:"brand"})
export class Brand{
  @PrimaryGeneratedColumn()
  brand_id:Number;

  @Column()
  brands:String;

  @Column()
  Cat_id:Number
  
  

}