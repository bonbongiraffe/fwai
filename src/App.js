import logo from './logo.svg';
import Home from './components/Home';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <div className="h-screen flex">
        <Home/>
        <Resume/>
    </div>
  );
}

export default App;
