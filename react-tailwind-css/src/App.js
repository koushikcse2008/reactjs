import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './tailwind.css';

function App() {
  return (
    <>
      <Router>
        <Header />
          <div className='container mx-auto p-10'>
            <div className='row align-middle content-evenly'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 
              </Routes>
            </div>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
