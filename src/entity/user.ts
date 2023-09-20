import {Entity,PrimaryGeneratedColumn,Column, ManyToMany, JoinTable ,ManyToOne} from "typeorm";

@Entity({name:"user"})
export class User{
    @PrimaryGeneratedColumn()
    user_id:number;

    @Column()
    name:String;

    @Column()
    email:String;

    @Column()
    password:String; 
    
}

