import './style.css';

function Header({ numberOfProducts: nroProducts = 3 }) {
    
    return (
      <header className="header"> 
      <div className="companyName">
        Art Store {nroProducts} 
      </div>
      </header>
    );
}

export default Header;