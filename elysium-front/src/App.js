import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Services from './components/pages/Services';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';

function App() { 
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
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
