import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseEffectDetails from './pages/UseEffectDetails';
import UseRef from './pages/UseRef';
import StateContext from './components/core/contexthook/ContextState';
import UseContextPage from './pages/UseContextPage';

function App() {
  return (
    <>
      <StateContext>
      <Router>        
        <div className="container">
        <Header />
        <div className="row container container1">
        <div className="col-lg-3 border-none">
          <Sidebar />
        </div>
        <div className="col-lg-9 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-details/:id" element={<UseEffectDetails />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-context" element={<UseContextPage />} />
        </Routes>
        </div>
        </div>
        <Footer />
        </div>
      </Router>
      </StateContext>
    </>
  );
}

export default App;
