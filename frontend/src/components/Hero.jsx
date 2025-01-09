// import React from 'react';
// // import Beatyhero from '../assets/Herosection.jpg';
// import hero from '../assets/frontend_assets/hero_img.png';

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero left side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//         <div className='text-[#414141]'>
//           <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
//           </div>
//           <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//           <div className='flex items-center gap-2'>
//             <p className='font-bold text-sm md:text-base'>SHOP NOW</p>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//           </div>
//         </div>
//       </div>
//       {/* HERO RIGHT SIDE  */}
//       {/* <img className='w-fll sm:w-1/2' src='{}'/> */}
//       <img className='w-fll sm:w-1/2' src={hero} alt="hero" />
      
//     </div>
    
//   );
// };

// export default Hero;

// import React from 'react';
// import HeroImage from '../assets/frontend_assets/Hero.jpg'; // Rename the import
// import HeroImage1 from '../assets/frontend_assets/Hero_1.jpg';

// const Hero = () => {
//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row border border-gray-400">
//         <div className="w-full">
//           <img
//             className="w-full h-full object-cover"
//             src={HeroImage} // Use the renamed import
//             alt="Hero Image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import HeroImage from '../assets/frontend_assets/Hero_1.1.jpg';
import HeroImage1 from '../assets/frontend_assets/Hero_2.jpg';
import HeroImage2 from '../assets/frontend_assets/Hero_3.png';

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400" >
        <Carousel className='index'
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img
              className="w-full h-6px object-cover"
              src={HeroImage}
              alt="Hero Image"
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src={HeroImage1}
              alt="Hero Image 1"
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src={HeroImage2}
              alt="Hero Image 2"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;

