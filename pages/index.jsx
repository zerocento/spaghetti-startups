import { useRouter } from 'next/router';
import React from 'react';
import { Header } from '../components/Header';
import { UserAuth } from '../context/authContext';

export default function HomePage() {
  console.log('pollooooo');
  return (
    <>
      <Header></Header>
      {/*       
      <HeroImage></HeroImage>
      <StartupTable>
        <SearchStartup></SearchStartup>
        <StartupFilters></StartupFilters>
        <StartupsContainer>
          <SingleStartup></SingleStartup>
        </StartupsContainer>
        <Pagination></Pagination>
  </StartupTable> */}
    </>
  );
}
