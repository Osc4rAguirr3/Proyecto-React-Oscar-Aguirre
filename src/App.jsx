import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContiner from './components/ItemListContiner/ItemListContiner';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContiner greeting="Mis Productos"/>
    </>
  );
};

export default App;