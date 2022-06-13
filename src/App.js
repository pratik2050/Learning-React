import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import JSXHello from './components/HelloJSX';
import ProjectsSection from './components/ProjectSection';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <JSXHello/>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}

export default App;
