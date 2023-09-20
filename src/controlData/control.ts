import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import { User } from "../entity/user.js"; 
import { AppDataSource } from "../database.js";
import userAuth from "../middleware/auth.js";
import * as path from 'path';
import fs from "fs";


dotenv.config();
const app = express();
app.use(express.json());

const secretKey:any = process.env.Secretkey; // Ensure the type is explicitly set as string
const userRepository: User | any = AppDataSource.getRepository(User);


export class AuthenticationOfData {
  
  static userRegistration = async (req: express.Request, res: express.Response) => {
    const { name, email, password, confirm_password } = req.body;
    console.log(req.body);

    if ( name && email && password && confirm_password) {
      if (password === confirm_password) {
        
        try {
          const existingUser = await userRepository.findOne({ where: { email: email } });
          if (existingUser) {
            return res.send({ status: "failed", message: "That Email is already in use" });
          }

          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          
          const newUser = userRepository.create({
            name: name,
            email: email,
            password: hashPassword,
          });

          const savedUser = await userRepository.save(newUser);
          console.log(savedUser);
          

          // Generate JWT Token
          const token = jwt.sign(
            { userID: savedUser.id }, secretKey, { expiresIn: "1d" }
          );
          
          res.send({
            status: "Success",
            message: "Success Registration",
            token: token,
          });
        } catch (error) {
          res.send({ status: "failed", message: "Unable to Register" });
        }
      } else {
        res.send({
          status: "failed",
          message: "confirm_password does not match with password",
        });
      }
    } else {
      res.send({ status: "failed", message: "All data fields are required" });
    }
  };

  static userLogin = async (req: any, res: any) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user:any = await userRepository.findOne({where:{ email: email} });

        if (user != null) {
          //saved password & user given password for login
          const isMatch = await bcrypt.compare(password, user.password);

          if (user.email === email && isMatch) {
            //Generate JWT Token || this token only used for change password further
            const token = jwt.sign( { userID: user.id }, secretKey,{ expiresIn: "1d" });

            res.send({
              status: "Success",
              message: "Successfully Logged in",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Invalid Email or Password",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not registered user",
          });
        }
      } else {
        res.send({ status: "failed", message: "All data fields required" });
      }
    } catch (err) {
      console.log(err);
      res.send({ status: "failed", message: "unable to Log in" });
    }
  };
  static changePassword = async (req: any, res: any): Promise<void> => {
    try {
      const { password, confirm_password } = req.body;
      const user:User | any = await userRepository.findOne({where:{id:req.params.id}}); // Assuming req.user.id holds the user ID

      if (password && confirm_password) {
        if (password === confirm_password) {
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);

          user.password = newHashPassword;
          await userRepository.save(user);

          res.send({ status: "Success", message: "Changed Password" });
        } else {
          res.send({
            status: "failed",
            message: "New Password and Confirm New Password do not match",
          });
        }
      } else {
        res.send({ status: "failed", message: "All data fields required" });
      }
    } catch (error) {
      console.error(error);
      res.send({ status: "failed", message: "Unable to change password" });
    }
  };

  static getUserData = async (req: any, res: any): Promise<void> => {
    res.send({ user: req.user });
  };
}

