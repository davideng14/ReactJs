import { useEffect, useState } from 'react';
import './style.css';
import { data } from './constants';
import Product, { ProductDetail } from '../Product';
import Modal from '../Modal';
import { isObjectEmpty } from '../../utils/utils';
  
function Store() {
    
    const [selectedProduct, setSelectedProduct] = useState({});
    const [showModal, setShowModal] = useState(false);
    const products = data;

    useEffect(() => {
      if(!isObjectEmpty(selectedProduct)) {
        setShowModal(true);
      }
    }, [selectedProduct]);

    return (
      <main className="container">
        {products.map((product) => (
          <Product product={product} setSelectedProduct={setSelectedProduct} />
        ))}
        { showModal &&
          <Modal title="Detalle del producto">
            <div>Aqui está el children prop</div>
            <button className='primary-button' onClick={() => setShowModal(false)}> Cerrar</button>
          </Modal>
        }
      </main>
    );
}

export default Store;