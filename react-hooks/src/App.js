import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import UseState from './components/UseState';
import Header from './components/Header';
import Footer from './components/Footer';
import UseEffect from './components/UseEffect';
import UseEffectDetails from './components/UseEffectDetails';

function App() {
  return (
    <>
      <Router>        
        <div className="container">
        <Header />
        <div className="container1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-details/:id" element={<UseEffectDetails />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
