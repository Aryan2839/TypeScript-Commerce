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
export let Category = class Category {
    cat_id;
    categories;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Category.prototype, "cat_id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Category.prototype, "categories", void 0);
Category = __decorate([
    Entity({ name: "category" })
], Category);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxFQUFnQyxNQUFNLFNBQVMsQ0FBQztBQU10RixXQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVE7SUFFbkIsTUFBTSxDQUFRO0lBR2QsVUFBVSxDQUFRO0NBSW5CLENBQUE7QUFQQztJQURDLHNCQUFzQixFQUFFOzt3Q0FDWDtBQUdkO0lBREMsTUFBTSxFQUFFOzhCQUNFLE1BQU07NENBQUM7QUFMUCxRQUFRO0lBRHBCLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsQ0FBQztHQUNiLFFBQVEsQ0FTcEIifQ==