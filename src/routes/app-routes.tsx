import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app-routes.css';

const Home = lazy(() => import('../pages/home'));
const Gallery = lazy(() => import('../pages/gallery'));
const Foods = lazy(() => import('../pages/menu/foods/foods'));
const Breakfast = lazy(() => import('../pages/menu/foods/breakfast'));
const Appetizers = lazy(() => import('../pages/menu/foods/appetizers'));
const Pasta = lazy(() => import('../pages/menu/foods/pasta'));
const Toasts = lazy(() => import('../pages/menu/foods/toasts'));
const Burgers = lazy(() => import('../pages/menu/foods/burgers'));
const Risotto = lazy(() => import('../pages/menu/foods/risotto'));
const Salads = lazy(() => import('../pages/menu/foods/salads'));
const Sandwiches = lazy(() => import('../pages/menu/foods/sandwiches'));
const Desserts = lazy(() => import('../pages/menu/foods/desserts'));
const Drinks = lazy(() => import('../pages/menu/drinks/drinks'));
const AllDrinks = lazy(() => import('../pages/menu/drinks/all-drinks'));
const Cocktails = lazy(() => import('../pages/menu/drinks/cocktails'));

const routeFallback = (
  <div className='route-fallback' role='status' aria-live='polite'>
    <img className='route-fallback__logo' src='/r.png' alt='' />
    <span className='route-fallback__text'>Loading</span>
  </div>
);

export const AppRoutes = () => (
  <Suspense fallback={routeFallback}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/foods' element={<Foods />} />
      <Route path='/foods/breakfast' element={<Breakfast />} />
      <Route path='/foods/appetizers' element={<Appetizers />} />
      <Route path='/foods/pasta' element={<Pasta />} />
      <Route path='/foods/toasts' element={<Toasts />} />
      <Route path='/foods/burgers' element={<Burgers />} />
      <Route path='/foods/rissoto' element={<Risotto />} />
      <Route path='/foods/salads' element={<Salads />} />
      <Route path='/foods/sandwiches' element={<Sandwiches />} />
      <Route path='/foods/deserts' element={<Desserts />} />
      <Route path='/drinks' element={<Drinks />} />
      <Route path='/drinks/all' element={<AllDrinks />} />
      <Route path='/drinks/coctails' element={<Cocktails />} />
    </Routes>
  </Suspense>
);
