import {Entity, PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,OneToMany} from "typeorm";
import { Brand } from "./brand"
import { Product } from "./product.js"


@Entity({name:"category"})
export class Category{
  @PrimaryGeneratedColumn()
  cat_id:number;

  @Column()
  categories:String;

  // @OneToMany(() => Product, (product) => product.category)         // i made error here, i typed {Product.Category} instead {product.category}
  // products: Product[];
}