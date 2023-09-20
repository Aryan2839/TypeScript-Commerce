import dotenv from "dotenv";

dotenv.config();

import "reflect-metadata";
import { DataSource  } from "typeorm";
// import { User } from "./entity/user.js"
import { Product } from "./entity/product.js";
import { Category } from "./entity/category.js";
import { Order } from "./entity/order.js";


// console.log(process.env.DB_PASSWORD);


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Product,Category,Order],
    migrations: [],
    subscribers: [],
})


// const testConnection = async () => {
//   try {
//     const connection = await new DataSource({
//         type: "postgres",
//             host: process.env.DB_HOST,
//             port: Number(process.env.DB_PORT),
//             username: process.env.DB_USERNAME,
//             password: String(process.env.DB_PASSWORD),
//             database: process.env.DB_DATABASE,
//             synchronize: true,
//             logging: false,
//             entities: [Product],
//             migrations: [],
//             subscribers: [],
//     });

//     console.log("Connected to PostgreSQL database");
//     await connection.close();
//   } catch (error) {
//     console.error("Error connecting to PostgreSQL:", error);
//   }
// };

// testConnection();
