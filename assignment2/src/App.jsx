import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllIssuesPage from './components/pages/AllIssuesPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css'

function App() {

  return (
    <>         
        <Router>
        <div className="container" style={{ width: "1000px", padding: "20px" }}>        
          <Routes>    
            <Route path='/' Component={AllIssuesPage} />
          </Routes>
        </div>
        </Router>            
    </>
  )
}

export default App
