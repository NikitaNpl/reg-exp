import React from 'react';

import { Cart, CartLoadingBlock } from '../../components/index';

function Home({ items, isLoaded }) {
  return (
    <div className="main container">
      {isLoaded ? items.map((item) => (
        <Cart
          key={`${item.id}_${item.title}`}
          items={item}
        />
      )) : Array(10).fill(0).map((_, index) => <CartLoadingBlock key={index} />
      )}
    </div>
  )
}

export default Home;
