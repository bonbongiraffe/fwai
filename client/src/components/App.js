// import logo from './logo.svg';
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from './Home';
// import '../App.css';

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route path='home' element={<Home navigate={navigate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
