import AboutPage from './AboutPage';
import './App.css';
import ContactPage from './ContactPage';
import EducationPage from './EducationPage';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import SkillsPage from './SkillsPage';
import { FaHome } from "react-icons/fa";
import ProjectPage from './ProjectPage';

function App() {
  return (
    <div className="App">
      <div>
      <a href="#1" className='left-corner-button'> <FaHome /></a>
       
      </div>
      <HomePage/>
      <AboutPage/>
      <EducationPage/>
      <SkillsPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
