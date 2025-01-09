// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { IntType } from 'three/src/constants.js'
// import { assets } from '../assets/frontend_assets/assets'

// const SearchBar = () => {

//     const {search,setsearch,showsearch,setShowSearch} = useContext(ShopContext)
//       const [visible, setVisible] = useState(false);
//     const location = useLocation();

//     useEffect(()=>{
//   if(location.pathname.include('collection') && showsearch){
//         setVisible(true);
//   }else{
//     setVisible(false)
//   }
//     },[location])

//   return showsearch ? (
//     <div className='border-t border-b bg-gray-50 text-center'>
//         <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//      <input value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='search'/>
//      <img className='w-4' src={assets.search_icon} alt=''/>
//         </div>
//     <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt=''/>
//     </div>
//   ):null
// }

// export default SearchBar


import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const SearchBar = () => {
    const { search, setsearch, showsearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check if the current path includes 'collection' and showsearch is true
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location, showsearch]); // Added showsearch to dependencies

    return visible ? ( // Use visible state for rendering
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    value={search} 
                    onChange={(e) => setsearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type='text' 
                    placeholder='search' 
                />
                <img className='w-4' src={assets.search_icon} alt='Search Icon' />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                className='inline w-3 cursor-pointer' 
                src={assets.cross_icon} 
                alt='Close Icon' 
            />
        </div>
    ) : null;
};

export default SearchBar;


