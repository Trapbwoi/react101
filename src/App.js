import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import Contact from './Contact';
import Profile from './Profile';
import Display from './Display';

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/display' element={<Display/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
