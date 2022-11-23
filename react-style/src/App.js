import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './component/Header';
import Home from './component/Home';
import InlineStyle from './component/InlineStyle';
import InternalStyle from './component/InternalStyle';
import ExternalStyle from './component/ExternalStyle';

function App() {
  return (
    <>
    <div className="container">
      <p>&nbsp;</p>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/inline-style" element={<InlineStyle />} />
        <Route path="/internal-style" element={<InternalStyle />} />
        <Route path="/external-style" element={<ExternalStyle />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
