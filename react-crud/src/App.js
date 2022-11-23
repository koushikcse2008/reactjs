import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import ListComponent from './components/ListComponent';
import Nav from './components/Nav';
import UpdateComponent from './components/UpdateComponent';


function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ListComponent />} />
        <Route path="/create-user" element={<CreateComponent />} /> 
        <Route path="/edit/:id" element={<UpdateComponent />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
