import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './Components/First';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/First" element={<First />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
