import './App.css';
import Header from "./component/common/Header";
import Sidebar from "./component/common/Sidebar";
import Footer from "./component/common/Footer";
import Home from './page/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Alerts from './page/Alerts';
import Accordion from './page/Accordion';
import FormsElements from './page/FormsElements';
import UsersProfile from './page/UsersProfile';

function App() {
  return (
    <>    
    <Router>
    <Header />
    <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components-alerts' element={<Alerts />} />
        <Route path='/components-accordion' element={<Accordion /> } />
        <Route path='/components-forms' element={<FormsElements />} />
        <Route path='/users-profile' element={<UsersProfile />} />
      </Routes>
      <Footer />  
    </Router>        
    </>
  );
}

export default App;
