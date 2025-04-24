import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Services from './pages/Services';

import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Login from './login/Login';
import PrivateRoute from './login/PrivateRoute';

function App() { 
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/navbar"  element={<Navbar />} />
          <Route path="/newproject" exact element={<NewProject />} />
          <Route path="/project/:id"  element={<Project />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;