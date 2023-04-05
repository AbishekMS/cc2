import React from 'react';
import cocktail from './assetss/download.jpeg';
import tea from './assetss/tea.jpg';
import juice from './assetss/juice.jpeg';
function withProductList(Component) {
  const products = [
    { name: 'Tea', price: 10, imageUrl: tea },
    { name: 'Cocktail', price: 20, imageUrl: cocktail },
    { name: 'Juice', price: 30, imageUrl:juice},
  ];

  return function ProductList(props) {
    return (
        <div>
        <h1>DAY 6</h1>
      <Component
        products={products}
        {...props}
      />
      </div>
    );
    
  }
}

function ProductList({ products }) {
  return (
    <div style={{textAlign:"center",}}>
    <ul>
      {products.map(product => (
        <li key={product.name}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img style={{width:100 ,height: 100}} src={product.imageUrl} alt={product.name} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default withProductList(ProductList);