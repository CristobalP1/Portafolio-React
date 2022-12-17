import logo from './logo.svg';
import './App.css';
import { NavbarPage } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerSection from './components/Banner';
import SkillPage from './components/Skills';
import ProjectsPages from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavbarPage></NavbarPage>
      <BannerSection></BannerSection>
      <SkillPage></SkillPage>
      <ProjectsPages></ProjectsPages>
    </div>
  );
}

export default App;



