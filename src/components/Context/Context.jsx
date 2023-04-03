import React from 'react';

export const CartContext = React.createContext({
  cartContent: [],
  updateCartContent: () => { },
});

export const LikeContext = React.createContext({
  likeProducts: [],
  updateLikeContent: () => { },
});
