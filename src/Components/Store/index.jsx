import './style.css';
import { data } from './constants';

function Product({ product }) {
    return (
      <div key={product.id} className="product">
        <img alt='' src={product.src}/>
        <p className='productDescription'>
            {product.name}
            <span className='price'>
                {product.price}
            </span>
        </p>
      </div>
    );
  }
  
function Store() {
    const products = data;
    return (
      <main className="container">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </main>
    );
}

export default Store;