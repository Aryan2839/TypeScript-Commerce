import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_USERNAME);
import express from "express";
import router from "./dataRoutes/userRoutes.js";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database.js";
import { Product } from "./entity/product.js";
import { Order } from "./entity/order.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", router);
AppDataSource.initialize()
    .then(async () => {
    console.log("database connected");
    // Get the Product repository
    const productRepository = AppDataSource.getRepository(Product);
    // Initialize data in the Product database
    //  await productRepository.save(data);
    console.log("Data initialized successfully");
})
    .catch((error) => {
    console.log("Error:", error);
});
app.get("/allData", async (req, res) => {
    const productData = AppDataSource.getRepository(Product);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const filters = req.query.filters || {};
    // Add a filter for the title
    const titleFilter = req.query.title || '';
    const brandFilter = req.query.brand || '';
    const indexValueFilter = req.query.indexValue || '';
    const category = req.query.category || '';
    try {
        const skip = (page - 1) * limit;
        const take = limit;
        const queryBuilder = productData.createQueryBuilder("Product");
        // Apply the title filter if provided
        if (titleFilter !== '') {
            queryBuilder.where("Product.title ILIKE :title", { title: `%${titleFilter}%` });
        }
        if (brandFilter !== '') {
            queryBuilder.where("Product.title ILIKE :title", { title: `%${brandFilter}%` });
        }
        if (indexValueFilter !== '') {
            queryBuilder.andWhere("CAST(Product.indexValue AS TEXT) ILIKE :indexValue", { indexValue: `%${indexValueFilter}%` });
        }
        if (category !== '') {
            queryBuilder.where("Product.category ILIKE :category", { category: `%${category}%` });
        }
        // Perform the search with pagination
        const [results, total] = await queryBuilder
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const totalPages = Math.ceil(total / limit);
        res.json({
            page,
            limit,
            totalPages,
            totalItems: total,
            data: results,
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
app.get("/data/:id", async (req, res) => {
    const productData = AppDataSource.getRepository(Product);
    const id = req.params.id;
    const findAll = await productData.findOne({ where: { indexValue: id } });
    res.json(findAll);
});
// Define a route for creating an order
app.post("/order", async (req, res) => {
    const orderData = req.body; // You should validate and sanitize the data here
    const orderRepository = AppDataSource.getRepository(Order);
    try {
        // Create a new order
        const newOrder = orderRepository.create(orderData);
        const savedOrder = await orderRepository.save(newOrder);
        res.json(savedOrder);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create the order" });
    }
});
app.listen(4000, () => {
    console.log("on 4000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxPQUFPLE9BQTBCLE1BQU8sU0FBUyxDQUFDO0FBQ2xELE9BQU8sTUFBTSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxQyxNQUFNLEdBQUcsR0FBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsQ0FBQztBQUl4QixhQUFhLENBQUMsVUFBVSxFQUFFO0tBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUcsRUFBRTtJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUVqQyw2QkFBNkI7SUFDN0IsTUFBTSxpQkFBaUIsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRy9ELDBDQUEwQztJQUMzQyx1Q0FBdUM7SUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRWxELENB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