import Header from './Components/Header';
import Store from './Components/Store';

export default function App() {
  const [numberOfProducts] = [2];
  return (
    <div className="App">
      <Header numberOfProducts={numberOfProducts} ></Header>
      <Store />
    </div>
  );
}
