import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { useState } from 'react';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
