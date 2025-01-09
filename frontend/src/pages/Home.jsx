import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import Footer from '../components/Footer';
import ReasonsToLoveUs from './ReasonsToLoveUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <ReasonsToLoveUs/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;


