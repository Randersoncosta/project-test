import './App.css';
import Header from './components/Header';
import Sobre from './components/Sobre';
import ListaProjetos from './components/ListaProjetos';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="app">
      <Header />
      <main>
        <Sobre />
        <ListaProjetos />
      </main>
      <Footer />
    </div>
  );
}

export default App;