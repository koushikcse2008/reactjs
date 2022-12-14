import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import ShowContact from './pages/ShowContact.';
import ContactList1 from './pages/ContactList1';

function App() {
  return (
    <>
    <Router>        
        <div className="container">
        <Header />
        <div className="container1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-list" element={<ContactList1 itemsPerPage={4} />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="/show-contact/:id" element={<ShowContact />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
