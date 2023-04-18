
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from 	'./components/itemCount/itemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(	'cantidad agregada ', quantity)}></ItemCount>
    </div>
  );
}

export default App;
