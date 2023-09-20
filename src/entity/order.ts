// entity/order.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Product } from "./product.js";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    order_date: Date;

    @Column("decimal", { precision: 10, scale: 2 })
    total_price: number;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
