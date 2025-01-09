// import express from 'express';
// import cors from 'cors'; // Corrected import statement
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectcloudinary from './config/cloudinary.js';
// // import userController from '../controllers/userController'; // Correct the path if needed
// import userRouter from './routes/userRoute.js';

// // import connectDB from './config/mongodb.js'

// // App config
// const app = express(); // Changed App to app for consistency
// const port = process.env.PORT || 4000;
// connectDB()
// connectcloudinary()

// // Middlewares
// app.use(express.json()); // Correct middleware usage
// app.use(cors()); // Corrected import usage


// app.use('/api/user',userRouter)

// // API endpoints
// app.get('/', (req, res) => {
//     res.send("API WORKING");
// });

// // Start server
// app.listen(port, () => 
//     console.log(`Server started on PORT: ${port}`)
// );




import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectcloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import sendMailRouter from './routes/sendMail.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB()
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit the process if DB connection fails
  });

connectcloudinary()
  .then(() => console.log('Cloudinary Connected'))
  .catch((error) => {
    console.error('Cloudinary Connection Error:', error);
    process.exit(1); // Exit the process if Cloudinary connection fails
  });

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/send-mail',sendMailRouter)


// API endpoint for health check
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
