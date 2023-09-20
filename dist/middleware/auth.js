import jwt from "jsonwebtoken";
import { User } from "../entity/user.js";
import { AppDataSource } from "../database.js";
const secretkey = process.env.Secretkey; // Ensure the type is explicitly set as string
const userRepository = AppDataSource.getRepository(User);
const userAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Secret")) {
        try {
            // Get token from header
            token = authorization.split(" ")[1];
            // Verify token
            const decodedToken = jwt.verify(token, secretkey);
            // Get user from token (assuming you want to fetch the user based on the decoded token's userID)
            const userId = decodedToken.userID;
            const user = await userRepository.findOne({ where: { user_id: userId } });
            if (user) {
                req.user = user; // Attach the user object to the request
                next(); // Proceed to the next middleware or route handler
            }
            else {
                res.send({ status: "failed", message: "User not found" });
            }
        }
        catch (error) {
            console.error(error);
            res.send({ status: "failed", message: "Unauthorized user" });
        }
    }
    else {
        res.send({ status: "failed", message: "No token" });
    }
};
export default userAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsTUFBTSxTQUFTLEdBQWlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsOENBQThDO0FBRXJHLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBaUIsRUFBRTtJQUNwRixJQUFJLEtBQWEsQ0FBQztJQUNsQixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUV0QyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3ZELElBQUk7WUFDRix3QkFBd0I7WUFDeEIsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsZUFBZTtZQUNmLE1BQU0sWUFBWSxHQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRXZELGdHQUFnRztZQUNoRyxNQUFNLE1BQU0sR0FBaUIsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNqRCxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1lBRXBFLElBQUksSUFBSSxFQUFFO2dCQUNSLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsd0NBQXdDO2dCQUN6RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtEQUFrRDthQUMzRDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztTQUM5RDtLQUNGO1NBQU07UUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUMsQ0FBQztBQUVGLGVBQWUsUUFBUSxDQUFDIn0=