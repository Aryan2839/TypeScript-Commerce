import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_USERNAME);

import express, { Request, Response } from "express";
import router from "./dataRoutes/userRoutes.js";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database.js";
import { Category } from "./entity/category.js";
import { Product } from "./entity/product.js";
import { Order } from "./entity/order.js";
import {} from "typeorm";

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

app.get("/allData", async (req: Request, res: Response) => {
  const productData = AppDataSource.getRepository(Product);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  // Add a filter for the title
  const titleFilter = req.query.title || "";
  const brandFilter = req.query.brand || "";
  const indexValueFilter = req.query.indexValue || "";
  const category = req.query.category || "";

  try {
    const skip = (page - 1) * limit;
    const take = limit;
    const queryBuilder = productData.createQueryBuilder("Product");

    // Apply the title filter if provided
    if (titleFilter !== "") {
      queryBuilder.where("Product.title ILIKE :title", {
        title: `%${titleFilter}%`,
      });
    }
    if (brandFilter !== "") {
      queryBuilder.where("Product.title ILIKE :title", {
        title: `%${brandFilter}%`,
      });
    }
    if (indexValueFilter !== "") {
      queryBuilder.andWhere(
        "CAST(Product.indexValue AS TEXT) ILIKE :indexValue",
        { indexValue: `%${indexValueFilter}%` }
      );
    }
    if (category !== "") {
      queryBuilder.where("Product.category ILIKE :category", {
        category: `%${category}%`,
      });
    }

    // Perform the search with pagination
    const [results, total] = await queryBuilder
      .skip(skip) //used to skip the given number of elements from collection and returns the remaining collection elements
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
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/data/:id", async (req: Request, res: Response) => {
  const productData = AppDataSource.getRepository(Product);
  const id: any = req.params.id;
  const findAll = await productData.findOne({ where: { indexValue: id } });
  res.json(findAll);
});
// Define a route for creating an order
app.post("/order", async (req: Request, res: Response) => {
  const orderData = req.body; // You should validate and sanitize the data here
  const orderRepository = AppDataSource.getRepository(Order);

  try {
    // Create a new order
    const newOrder = orderRepository.create(orderData);
    const savedOrder = await orderRepository.save(newOrder);

    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the order" });
  }
});

app.listen(4000, () => {
  console.log("on 4000");
});
