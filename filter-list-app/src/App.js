import './App.css';
// import Hello from './components/hello';
// import FilterableList from './components/FilterableList';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import SelectBox from './components/SelectBox';
import FilterJsonServer from './components/FilterJsonServer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Hello />
        <FilterableList /> */}
        {/* <SelectBox />         */}
        <FilterJsonServer />
      </header>
    </div>
  );
}

export default App;
