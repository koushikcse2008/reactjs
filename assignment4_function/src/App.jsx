import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import About from './components/pages/About'
import AllIssuesPage from './components/pages/AllIssuesPage'
import AddIssue from './components/pages/AddIssue'
import IssueDetails from './components/pages/IssueDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './App.css'
import UpdateIssue from './components/pages/UpdateIssue'


function App() {
  return (
    <>
      <Router>
      <div className="container" style={{ width: "1000px", padding: "20px" }}>
        <Header />
        <Routes>
          <Route path='/' Component={About} />
          <Route path='/issues' Component={AllIssuesPage} />
          <Route path='/add-issue' Component={AddIssue} />
          <Route path='/details/:id' Component={IssueDetails} />
          <Route path='/edit/:id' Component={UpdateIssue} />
        </Routes>
        <Footer />
        </div>
      </Router>    
    </>
  )
}

export default App
