import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
import { User } from "../entity/user.js";
import { AppDataSource } from "../database.js";
dotenv.config();
const app = express();
app.use(express.json());
const secretKey = process.env.Secretkey; // Ensure the type is explicitly set as string
const userRepository = AppDataSource.getRepository(User);
export class AuthenticationOfData {
    static userRegistration = async (req, res) => {
        const { name, email, password, confirm_password } = req.body;
        console.log(req.body);
        if (name && email && password && confirm_password) {
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
                    const token = jwt.sign({ userID: savedUser.id }, secretKey, { expiresIn: "1d" });
                    res.send({
                        status: "Success",
                        message: "Success Registration",
                        token: token,
                    });
                }
                catch (error) {
                    res.send({ status: "failed", message: "Unable to Register" });
                }
            }
            else {
                res.send({
                    status: "failed",
                    message: "confirm_password does not match with password",
                });
            }
        }
        else {
            res.send({ status: "failed", message: "All data fields are required" });
        }
    };
    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = await userRepository.findOne({ where: { email: email } });
                if (user != null) {
                    //saved password & user given password for login
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (user.email === email && isMatch) {
                        //Generate JWT Token || this token only used for change password further
                        const token = jwt.sign({ userID: user.id }, secretKey, { expiresIn: "1d" });
                        res.send({
                            status: "Success",
                            message: "Successfully Logged in",
                            token: token,
                        });
                    }
                    else {
                        res.send({
                            status: "failed",
                            message: "Invalid Email or Password",
                        });
                    }
                }
                else {
                    res.send({
                        status: "failed",
                        message: "You are not registered user",
                    });
                }
            }
            else {
                res.send({ status: "failed", message: "All data fields required" });
            }
        }
        catch (err) {
            console.log(err);
            res.send({ status: "failed", message: "unable to Log in" });
        }
    };
    static changePassword = async (req, res) => {
        try {
            const { password, confirm_password } = req.body;
            const user = await userRepository.findOne({ where: { id: req.params.id } }); // Assuming req.user.id holds the user ID
            if (password && confirm_password) {
                if (password === confirm_password) {
                    const salt = await bcrypt.genSalt(10);
                    const newHashPassword = await bcrypt.hash(password, salt);
                    user.password = newHashPassword;
                    await userRepository.save(user);
                    res.send({ status: "Success", message: "Changed Password" });
                }
                else {
                    res.send({
                        status: "failed",
                        message: "New Password and Confirm New Password do not match",
                    });
                }
            }
            else {
                res.send({ status: "failed", message: "All data fields required" });
            }
        }
        catch (error) {
            console.error(error);
            res.send({ status: "failed", message: "Unable to change password" });
        }
    };
    static getUserData = async (req, res) => {
        res.send({ user: req.user });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sRGF0YS9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTS9DLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLE1BQU0sU0FBUyxHQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsOENBQThDO0FBQzNGLE1BQU0sY0FBYyxHQUFlLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHckUsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1FBQzlFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsSUFBSyxJQUFJLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsRCxJQUFJLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtnQkFFakMsSUFBSTtvQkFDRixNQUFN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