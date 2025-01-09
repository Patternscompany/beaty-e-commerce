// import jwt from 'jsonwebtoken'

// const authUser = async (req,res,next) => {
//  const {token} = req.headers;

//     if(!token){
//         return res.json({success:false,message:'Not Authorized Login Again'})


//     }
//     try {
//     const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//     req.body.userId = token_decode.id
//     next()

//     } catch (error) {
//         console.log(error)
//         res.json({success :false,message:error.message})
//     }

// }

// export default authUser

import jwt from 'jsonwebtoken';
// import userModel from '../models/userModel.js'; // Uncomment this line when user lookup is needed

const authUser = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  
    req.body.userId = decodedToken.id;
    
    next();

  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

export default authUser;

