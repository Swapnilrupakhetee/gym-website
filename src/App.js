
import './App.css';
import About from './components/About';
import Herosection from './components/Herosection.jsx/Herosection';
import Newsletter from './components/Newsletter';
import Price from './components/Price';


function App() {
  return (
    <div className="App">
      <Herosection/>
      <About/>
      <Price/>
      <Newsletter/>
    </div>
  );
}

export default App;
