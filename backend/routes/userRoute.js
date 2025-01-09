
// import express from 'express';

// import {loginUser,registerUser, adminLogin} from '../controllers/userController';

// const useRouter = express.Router();
// userRouter.post('/register',registerUser)
// userRouter.post('/login',loginUser)
// userRouter.post('/admin',adminLogin)

// export default userRouter


// import express from 'express';
// import { registerUser, adminLogin } from '../controllers/userController.js'; // Ensure correct path and extension

// const userRouter = express.Router(); // Corrected variable name
// userRouter.post('/register', registerUser);
// // userRouter.post('/login', loginUser);
// userRouter.post('./login',loginUser);
// userRouter.post('/admin', adminLogin);

// export default userRouter;



import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js'; // Ensure correct path and extension

const userRouter = express.Router(); // Corrected variable name

// Define routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser); // Corrected the route path
userRouter.post('/admin', adminLogin);

export default userRouter;
