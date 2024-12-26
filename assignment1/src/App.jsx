import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FunctionCounter from './components/FunctionCounter'
import ClassCounter from './components/ClassCounter'

function App() {

  return (
    <>
    <div className="container p-5" style={{ border: '2px solid #000', width: '1024px' }}>
      <div className="row">
        <div className="col-lg-6 fw-bold" style={{ borderRight: '2px solid #000' }}>
          <FunctionCounter />
        </div>
        <div className="col-lg-6 fw-bold">          
          <ClassCounter />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
