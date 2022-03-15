import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import JSXHello from './components/HelloJSX';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <JSXHello/>
    </div>
  );
}

export default App;
