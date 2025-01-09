

// import mongoose from "mongoose";

// const connectDB = async () => {
//     mongoose.connection.on('connected', () => {
//         console.log('DB connected');
//     });

//     await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
// };

// export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('DB connected');
//     } catch (error) {
//         console.error('DB connection error:', error.message);
//         process.exit(1); // Exit process with failure
//     }
// };

// export default connectDB; // Ensure this line is present










// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
//         console.log('DB connected');
//     } catch (error) {
//         console.error('DB connection error:', error.message);
//         if (error.cause) {
//             console.error('Cause of the error:', error.cause);
//         }
//         process.exit(1); // Exit process with failure
//     }
// };

// export default connectDB;





// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('DB connected');
//     } catch (error) {
//         console.error('DB connection error:', error);
//         process.exit(1); // Exit the process if connection fails
//     }
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // MongoDB connection string without deprecated options
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;

