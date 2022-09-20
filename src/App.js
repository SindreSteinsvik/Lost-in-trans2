import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Startup from './views/Startup';
import Profile from './views/Profile';
import Translation from './views/Translation';
import Navbar from './components/Navbar/Navbar';


function App() {



  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
    
        <Routes>
          <Route>
            <Route path="/" element={<Startup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/translation" element={<Translation />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
