var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export let Brand = class Brand {
    brand_id;
    brands;
    Cat_id;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Brand.prototype, "brand_id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Brand.prototype, "brands", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Brand.prototype, "Cat_id", void 0);
Brand = __decorate([
    Entity({ name: "brand" })
], Brand);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L2JyYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxFQUFzQixNQUFNLFNBQVMsQ0FBQztBQUs1RSxXQUFNLEtBQUssR0FBWCxNQUFNLEtBQUs7SUFFaEIsUUFBUSxDQUFRO0lBR2hCLE1BQU0sQ0FBUTtJQUdkLE1BQU0sQ0FBTztDQUlkLENBQUE7QUFWQztJQURDLHNCQUFzQixFQUFFOzhCQUNoQixNQUFNO3VDQUFDO0FBR2hCO0lBREMsTUFBTSxFQUFFOzhCQUNGLE1BQU07cUNBQUM7QUFHZDtJQURDLE1BQU0sRUFBRTs4QkFDRixNQUFNO3FDQUFBO0FBUkYsS0FBSztJQURqQixNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUM7R0FDVixLQUFLLENBWWpCIn0=