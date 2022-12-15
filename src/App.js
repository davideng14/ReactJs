import Header from './components/Header';
import Store from './components/Store';
import './App.css';


export default function App() {
  const [,numberOfProducts] = [2, 3];
  
  return (
    <div className="App">
      <Header numberOfProducts={numberOfProducts} ></Header>
      <Store />
    </div>
  );
}
