import React from 'react';

const CartWidget = () => {
  return (
    <button className="btn btn-outline-primary position-relative">
      <i className="bi bi-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </button>
  );
};

export default CartWidget;
