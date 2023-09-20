var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// entity/order.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Product } from "./product.js";
export let Order = class Order {
    id;
    user_id;
    order_date;
    total_price;
    products;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Order.prototype, "user_id", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Order.prototype, "order_date", void 0);
__decorate([
    Column("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    ManyToMany(() => Product),
    JoinTable(),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
Order = __decorate([
    Entity()
], Order);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtCQUFrQjtBQUNsQixPQUFPLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHaEMsV0FBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBRWQsRUFBRSxDQUFTO0lBR1gsT0FBTyxDQUFTO0lBR2hCLFVBQVUsQ0FBTztJQUdqQixXQUFXLENBQVM7SUFJcEIsUUFBUSxDQUFZO0NBQ3ZCLENBQUE7QUFkRztJQURDLHNCQUFzQixFQUFFOztpQ0FDZDtBQUdYO0lBREMsTUFBTSxFQUFFOztzQ0FDTztBQUdoQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7OEJBQ3RELElBQUk7eUNBQUM7QUFHakI7SUFEQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzBDQUMzQjtBQUlwQjtJQUZDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDekIsU0FBUyxFQUFFOzt1Q0FDUTtBQWZYLEtBQUs7SUFEakIsTUFBTSxFQUFFO0dBQ0ksS0FBSyxDQWdCakIifQ==