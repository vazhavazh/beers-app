
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BeerListPage } from 'pages/BeerListPage/BeerListPage';
import { OneBeerPage } from 'pages/OneBeerPage/OneBeerPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="beers" element={<BeerListPage />} />
          <Route path="beers/:id" element={<OneBeerPage />} />
        </Route>
      </Routes>
    </>
  );
}


