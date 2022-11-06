import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Gabriel from "./components/Gabriel"
import Jo from "./components/Jo"
import Iliza from "./components/Iliza"
import Hasan from "./components/Hasan"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Gabriel/>} />
        <Route path='/jo' element={<Jo/>} />
        <Route path='/iliza' element={<Iliza/>} />
        <Route path='/hasan' element={<Hasan/>} />
      </Routes>
    </Router>
  );
}

export default App;


