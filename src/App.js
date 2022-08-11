import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Skill from './Component/Skill';
import Project from './Component/Project';
import Contact from './Component/Contact';
import ParticlesBackground from './Component/ParticlesBackground';

function App() {
  return (
    <div className='wrapper'>
      <ParticlesBackground />
      <Header />
      <Home />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
