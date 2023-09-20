import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { DataSource } from "typeorm";
// import { User } from "./entity/user.js"
import { Product } from "./entity/product.js";
import { Category } from "./entity/category.js";
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
    entities: [Product, Category],
    migrations: [],
    subscribers: [],
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxVQUFVLEVBQUcsTUFBTSxTQUFTLENBQUM7QUFDdEMsMENBQTBDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsd0NBQXdDO0FBR3hDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLFVBQVUsQ0FBQztJQUN4QyxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ3pCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztJQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLEtBQUs7SUFDZCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUMsUUFBUSxDQUFDO0lBQzVCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsV0FBVyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyxDQUFBO0FBR0YsdUNBQXVDO0FBQ3ZDLFVBQVU7QUFDVixnREFBZ0Q7QUFDaEQsNEJBQTRCO0FBQzVCLHlDQUF5QztBQUN6QyxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCxpREFBaUQ7QUFDakQsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5QixtQ0FBbUM7QUFDbkMsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQixVQUFVO0FBRVYsdURBQXVEO0FBQ3ZELGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsK0RBQStEO0FBQy9ELE1BQU07QUFDTixLQUFLO0FBRUwsb0JBQW9CIn0=