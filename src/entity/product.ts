import {Entity, PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,ManyToMany} from "typeorm";
import { Category } from "./category.js";
import { Order } from "./order.js";


@Entity({name:"product"})
export class Product{
  @PrimaryGeneratedColumn()
  indexValue:number;
  
  @Column()
  title:string;

  @Column()
  rating: string;

  @Column({ nullable:true })
  reviews: String;

  @Column()
  specialDiscount:String;

  @Column()
  sellingPrice:string;

  @Column()
  scratchedPrice:string;

  @Column()
  discountPercentage:String;

  @Column()
  category:string

  @Column("text")
  description:String;

  @Column('jsonb')
  highlightsList:string[];

  @Column('jsonb',{nullable:true })
  Specification: Record<string,string>;

  @Column({ type: "varchar", array: true })
  images: string[];

  // @Column()
  // Category_ID:number;
                    
  // @ManyToOne(()=>Category,(category)=>category.products) 
  // // i made error above, i wrote product, but i should write according this "products" from [products: Product[];] from category table 
  // @JoinColumn({name:"Category_ID"})
  // category:Category;  

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
 
}