import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Patients from './components/Patients';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage/>}/>
        <Route path="/Patients" element={<Patients/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
