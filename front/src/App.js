import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom"
import Create from './components/Create';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/create" element={<Create/>}/>
    </Routes>
  );
}

export default App;
