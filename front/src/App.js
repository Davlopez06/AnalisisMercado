import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom"
import Create from './components/Create';
import Editar from './components/Editar';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/create" element={<Create/>}/>
      <Route exact path="/editar/:id" element={<Editar/>}/>
    </Routes>
  );
}

export default App;
