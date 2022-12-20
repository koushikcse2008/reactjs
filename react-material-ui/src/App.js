import './App.css';
// import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Listing from './pages/Listing';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <Router>
        <Header />
        <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
