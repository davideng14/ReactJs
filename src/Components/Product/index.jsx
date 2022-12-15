import React from "react";

export function ProductDetail({ src, price, name }) {
    return (
        <>
            <img alt='' src={src}/>
            <p className='productDescription'>
                {name}
                <span className='price'>
                    {price}
                </span>
            </p>
        </>
    )
}

function ProductItem({ product, setSelectedProduct }) {
    return (
      <div key={product.id} className="product">
        <ProductDetail src={product.src} price={product.price} name={product.name}/>
        <button className="primary-button" onClick={() => setSelectedProduct(product)}>
            Show Details
        </button>
      </div>
    );
}

export default ProductItem;