import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a MiTienda! Explora nuestros productos." />
    </div>
  );
};

export default App;
