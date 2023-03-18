import React from 'react'

function Products(props) {
  return (
    <div>
      <h1>These are the products form API</h1>
      {props.products.map((products) => {
        return (
          <div key={products.id}>
            <h2>{products.label}</h2>
            <p>{products.quantity}</p>
            <p>{products.price}</p>
          </div>
        )
      })}
      
    </div>
  )
}

export default Products