import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <div className="h-screen relative">
        <NavBar></NavBar>
        <Body></Body>
    </div>
  );
}

export default App;
