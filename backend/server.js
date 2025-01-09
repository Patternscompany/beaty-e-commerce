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

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Allow specific origins and headers
const allowedOrigins = ['https://frontend-ecru-rho-48.vercel.app', 'https://matchpic.in'];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'token'], // Add 'token' here
  credentials: true, // Enable credentials if needed
}));

// Middleware for JSON body parsing
app.use(express.json());

// MongoDB Connection
connectDB()
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit the process if DB connection fails
  });

// Cloudinary Connection
connectcloudinary()
  .then(() => console.log('Cloudinary Connected'))
  .catch((error) => {
    console.error('Cloudinary Connection Error:', error);
    process.exit(1); // Exit the process if Cloudinary connection fails
  });

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/send-mail', sendMailRouter);

// Health check API
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
