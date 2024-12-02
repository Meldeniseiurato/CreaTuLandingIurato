import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container mt-5">
      <h2>{mensaje}</h2>
      {/* Aquí se cargará el catálogo de productos en el futuro */}
    </div>
  );
};

export default ItemListContainer;
