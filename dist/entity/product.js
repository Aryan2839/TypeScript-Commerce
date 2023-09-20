var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Order } from "./order.js";
export let Product = class Product {
    indexValue;
    title;
    rating;
    reviews;
    specialDiscount;
    sellingPrice;
    scratchedPrice;
    discountPercentage;
    category;
    description;
    highlightsList;
    Specification;
    images;
    // @Column()
    // Category_ID:number;
    // @ManyToOne(()=>Category,(category)=>category.products) 
    // // i made error above, i wrote product, but i should write according this "products" from [products: Product[];] from category table 
    // @JoinColumn({name:"Category_ID"})
    // category:Category;  
    orders;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "indexValue", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "rating", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "reviews", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "specialDiscount", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "sellingPrice", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "scratchedPrice", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "discountPercentage", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    Column("text"),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    Column('jsonb'),
    __metadata("design:type", Array)
], Product.prototype, "highlightsList", void 0);
__decorate([
    Column('jsonb', { nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "Specification", void 0);
__decorate([
    Column({ type: "varchar", array: true }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    ManyToMany(() => Order, (order) => order.products),
    __metadata("design:type", Array)
], Product.prototype, "orders", void 0);
Product = __decorate([
    Entity({ name: "product" })
], Product);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLHNCQUFzQixFQUFDLE1BQU0sRUFBc0IsVUFBVSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJNUIsV0FBTSxPQUFPLEdBQWIsTUFBTSxPQUFPO0lBRWxCLFVBQVUsQ0FBUTtJQUdsQixLQUFLLENBQVE7SUFHYixNQUFNLENBQVM7SUFHZixPQUFPLENBQVM7SUFHaEIsZUFBZSxDQUFRO0lBR3ZCLFlBQVksQ0FBUTtJQUdwQixjQUFjLENBQVE7SUFHdEIsa0JBQWtCLENBQVE7SUFHMUIsUUFBUSxDQUFPO0lBR2YsV0FBVyxDQUFRO0lBR25CLGNBQWMsQ0FBVTtJQUd4QixhQUFhLENBQXdCO0lBR3JDLE1BQU0sQ0FBVztJQUVqQixZQUFZO0lBQ1osc0JBQXNCO0lBRXRCLDBEQUEwRDtJQUMxRCx3SUFBd0k7SUFDeEksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUd2QixNQUFNLENBQVU7Q0FFakIsQ0FBQTtBQWpEQztJQURDLHNCQUFzQixFQUFFOzsyQ0FDUDtBQUdsQjtJQURDLE1BQU0sRUFBRTs7c0NBQ0k7QUFHYjtJQURDLE1BQU0sRUFBRTs7dUNBQ007QUFHZjtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQzs4QkFDakIsTUFBTTt3Q0FBQztBQUdoQjtJQURDLE1BQU0sRUFBRTs4QkFDTyxNQUFNO2dEQUFDO0FBR3ZCO0lBREMsTUFBTSxFQUFFOzs2Q0FDVztBQUdwQjtJQURDLE1BQU0sRUFBRTs7K0NBQ2E7QUFHdEI7SUFEQyxNQUFNLEVBQUU7OEJBQ1UsTUFBTTttREFBQztBQUcxQjtJQURDLE1BQU0sRUFBRTs7eUNBQ007QUFHZjtJQURDLE1BQU0sQ0FBQyxNQUFNLENBQUM7OEJBQ0gsTUFBTTs0Q0FBQztBQUduQjtJQURDLE1BQU0sQ0FBQyxPQUFPLENBQUM7OytDQUNRO0FBR3hCO0lBREMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQzs7OENBQ0k7QUFHckM7SUFEQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ3hCO0FBV2pCO0lBREMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7dUNBQ25DO0FBakRMLE9BQU87SUFEbkIsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxDQUFDO0dBQ1osT0FBTyxDQW1EbkIifQ==