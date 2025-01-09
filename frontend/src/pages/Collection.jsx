



// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/frontend_assets/assets'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'

// const Collection = () => {
//   const { products } = useContext(ShopContext)
//   const [showFilter, setShowFilter] = useState(false)
//   const [filterProducts, setFilterProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subcategory, setSubCategory] = useState([])
//   const [sortType,setSortTpye] =useState('relavent')

//   // Category Filter logic
//   const toggleCategory = (e) => {
//     const selectedCategory = e.target.value
//     if (category.includes(selectedCategory)) {
//       setCategory(prev => prev.filter(item => item !== selectedCategory))
//     } else {
//       setCategory(prev => [...prev, selectedCategory])
//     }
//   }

//   // Subcategory Filter logic
//   const toggleSubCategory = (e) => {
//     const selectedSubCategory = e.target.value
//     if (subcategory.includes(selectedSubCategory)) {
//       setSubCategory(prev => prev.filter(item => item !== selectedSubCategory))
//     } else {
//       setSubCategory(prev => [...prev, selectedSubCategory])
//     }
//   }

//   // Apply filters

//   const applyFilter = () => {
//     let filteredProducts = products.slice()

//     // Filter by category
//     if (category.length > 0) {
//       filteredProducts = filteredProducts.filter(item => category.includes(item.category))
//     }

//     // Filter by subcategory
//     if (subcategory.length > 0) {
//       filteredProducts = filteredProducts.filter(item => subcategory.includes(item.subcategory))
//     }

//     setFilterProducts(filteredProducts)
//   }

//   // useEffect(() => {
//   //   setFilterProducts(products)
//   // }, [products])

//   const sortProduct = () =>{
//     let fpCopy = filterProducts.slice();
//     switch(sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
//         break;
//         case 'high-low':
//           setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
//           break;

//           default:
//             applyFilter();
//             break;

//     }
//   }

//   useEffect(() => {
//     applyFilter()
//   }, [category, subcategory])

//   useEffect(()=>{
//     setSortTpye();
//   },[sortType])

//   // Toggle the filter visibility on small screens
//   const toggleFilter = () => {
//     setShowFilter(!showFilter)
//   }

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-6'>

//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//           onClick={toggleFilter}
//         >
//           FILTER
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
//         </p>

//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
//           <select onChange={(e)=>setSortTpye(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Display Filtered Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {filterProducts.map((item, index) => (
//             <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Collection




// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/frontend_assets/assets'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'

// const Collection = () => {
//   const { products } = useContext(ShopContext)
//   const [showFilter, setShowFilter] = useState(false)
//   const [filterProducts, setFilterProducts] = useState(products)  // Default to all products
//   const [category, setCategory] = useState([])
//   const [subcategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState('relevant')

//   // Category Filter logic
//   const toggleCategory = (e) => {
//     const selectedCategory = e.target.value
//     if (category.includes(selectedCategory)) {
//       setCategory(prev => prev.filter(item => item !== selectedCategory))
//     } else {
//       setCategory(prev => [...prev, selectedCategory])
//     }
//   }

//   // Subcategory Filter logic
//   const toggleSubCategory = (e) => {
//     const selectedSubCategory = e.target.value
//     if (subcategory.includes(selectedSubCategory)) {
//       setSubCategory(prev => prev.filter(item => item !== selectedSubCategory))
//     } else {
//       setSubCategory(prev => [...prev, selectedSubCategory])
//     }
//   }

//   // Apply filters
//   const applyFilter = () => {
//     let filteredProducts = products.slice()

//     // Filter by category
//     if (category.length > 0) {
//       filteredProducts = filteredProducts.filter(item => category.includes(item.category))
//     }

//     // Filter by subcategory
//     if (subcategory.length > 0) {
//       filteredProducts = filteredProducts.filter(item => subcategory.includes(item.subcategory))
//     }

//     setFilterProducts(filteredProducts)
//   }

//   // Sort products
//   const sortProduct = () => {
//     let sortedProducts = [...filterProducts]
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price)
//         break
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price)
//         break
//       default:
//         // No sorting for "Relevant" option
//         sortedProducts = [...filterProducts]
//     }
//     setFilterProducts(sortedProducts)
//   }

//   // Apply filter whenever category or subcategory changes
//   useEffect(() => {
//     applyFilter()
//   }, [category, subcategory])

//   // Apply sorting whenever sortType changes
//   useEffect(() => {
//     sortProduct()
//   }, [sortType, filterProducts])

//   // Toggle the filter visibility on small screens
//   const toggleFilter = () => {
//     setShowFilter(!showFilter)
//   }

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-6'>

//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//           onClick={toggleFilter}
//         >
//           FILTER
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
//         </p>

//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
//             </label>
//             <label className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
//           <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Display Filtered Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {filterProducts.map((item, index) => (
//             <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Collection


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState(products)
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    const selectedCategory = e.target.value
    if (category.includes(selectedCategory)) {
      setCategory(prev => prev.filter(item => item !== selectedCategory))
    } else {
      setCategory(prev => [...prev, selectedCategory])
    }
  }

  const toggleSubCategory = (e) => {
    const selectedSubCategory = e.target.value
    if (subcategory.includes(selectedSubCategory)) {
      setSubCategory(prev => prev.filter(item => item !== selectedSubCategory))
    } else {
      setSubCategory(prev => [...prev, selectedSubCategory])
    }
  }

  const applyFilter = () => {
    let filteredProducts = products.slice()

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(item => category.includes(item.category))
    }

    if (subcategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => subcategory.includes(item.subcategory))
    }

    setFilterProducts(filteredProducts)
  }

  const sortProduct = () => {
    let sortedProducts = [...filterProducts]
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      default:
        sortedProducts = [...filterProducts]
    }
    setFilterProducts(sortedProducts)
  }

  useEffect(() => {
    applyFilter()
  }, [category, subcategory])

  useEffect(() => {
    sortProduct()
  }, [sortType, filterProducts])

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-6'>
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={toggleFilter}
        >
          FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </label>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            
            <Link to={`/product/${item._id}`} key={index}> {/* Use _id here instead of id */}
  <ProductItem
    name={item.name}
    id={item._id} // Pass _id here to ProductItem as well
    price={item.price}
    image={item.image[0]}
  />
</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
