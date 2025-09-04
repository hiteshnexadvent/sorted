import './App.css';
import Base from './components/Base';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Work from './pages/Work';
import WorkDesc from './pages/WorkDesc';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Base/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/workdesc' element={<WorkDesc/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
