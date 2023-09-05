import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { Auth } from './pages/auth';
import { NewListing } from './pages/new-listing';
import { Home } from './pages/home';
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes className="routes">
            <Route path="/home" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/new-listing" element={<NewListing/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
