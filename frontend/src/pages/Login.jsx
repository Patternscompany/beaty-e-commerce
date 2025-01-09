// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {

//   const [currentState,setCurrentState] = useState('Sign Up')
//   const {token ,setToken , navigate,backendUrl} = useContext(ShopContext)
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const onSubmitHandler = async (event) =>{
//     event.preventDefault();
//   try {
//     if(currentState == 'Sign Up'){
    
//    const response = await axios.post("http://localhost:4000/api/user/register",{name,email,password})
  
//    if(response.data.success) {
//     setToken(response.data.token)
//     localStorage.setItem('token',response.data.token)

//    }else{
//     toast.error(response.data.message)
//    }

//     }else{
//       const response = await axios.post("http://localhost:4000/api/user/login",{email,password})
//       console.log(response.data)

//     }

    
//   } catch (error) {
    
//   }


//   }
//   return (
//     <form className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='lnline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl ml-20'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800 ml-20' />
//       </div>
//     {currentState === 'Login' ? '':<input onChange={(e)=> setName(e.target.value)} value={name}  type='text' placeholder='Name' required className='w-full px-3 py-2 border-gray-800 '/>}
//      <input onChange={(e)=> setEmail(e.target.value)} value={email}  type='email' placeholder='Email' required className='w-full px-3 py-2 border-gray-800 '/>
//      <input  onChange={(e)=> setPassword(e.target.value)} value={password} type='password' placeholder='Password'  required className='w-full px-3 py-2 border-gray-800 '/>
//      <div className='w-full felx justify-between text-sm mt-[-8px]'>
//       <p className='cursor-pointer'>Forgot Your password ?</p>
//       {
//         currentState === 'Login'
//         ?<p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-center'>Create Account</p>
//         :<p onClick={()=>setCurrentState('Login')}  className='cursor-pointer text-center'>Login Here</p>
//       }
//        <button onClick={onSubmitHandler} type="submit" className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200 ml-20">{currentState === 'Sign Up' ?'Sign Up': 'Login'}</button>
//      </div>
//     </form>
     
//   )
// }

// export default Login



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post("https://backend-lac-beta.vercel.app/api/user/register", { name, email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('User registered successfully!');
        } else {
          toast.error(response.data.message || 'User already exists');
        }
      } else {
        const response = await axios.post("https://backend-lac-beta.vercel.app/api/user/login", { email, password });
        // console.log(response.data)
        if (response.data.suceess) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login successful!');
        } else {
          toast.error(response.data.message || 'Invalid email or password');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  })

  return (
    <form className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl ml-20'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ml-20' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Name' required className='w-full px-3 py-2 border-gray-800 '/>}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required className='w-full px-3 py-2 border-gray-800 '/>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required className='w-full px-3 py-2 border-gray-800 '/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your password?</p>
        {currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-center'>Create Account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-center'>Login Here</p>}
        <button onClick={onSubmitHandler} type="submit" className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200 ml-20">{currentState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;