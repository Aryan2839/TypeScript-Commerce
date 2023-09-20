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
export let User = class User {
    user_id;
    name;
    email;
    password;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    Entity({ name: "user" })
], User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFDLHNCQUFzQixFQUFDLE1BQU0sRUFBbUMsTUFBTSxTQUFTLENBQUM7QUFHeEYsV0FBTSxJQUFJLEdBQVYsTUFBTSxJQUFJO0lBRWIsT0FBTyxDQUFRO0lBR2YsSUFBSSxDQUFRO0lBR1osS0FBSyxDQUFRO0lBR2IsUUFBUSxDQUFRO0NBRW5CLENBQUE7QUFYRztJQURDLHNCQUFzQixFQUFFOztxQ0FDVjtBQUdmO0lBREMsTUFBTSxFQUFFOzhCQUNKLE1BQU07a0NBQUM7QUFHWjtJQURDLE1BQU0sRUFBRTs4QkFDSCxNQUFNO21DQUFDO0FBR2I7SUFEQyxNQUFNLEVBQUU7OEJBQ0EsTUFBTTtzQ0FBQztBQVhQLElBQUk7SUFEaEIsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDO0dBQ1QsSUFBSSxDQWFoQiJ9