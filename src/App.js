import logo from './logo.svg';
import './App.css';
import { NavbarPage } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerSection from './components/Banner';
import SkillPage from './components/Skills';
import ProjectsPages from './components/Projects';
import ContactPages from './components/Contact';
import FooterPages from './components/Footer';
import SkillSet from './components/SkillsSet';

function App() {
  return (
    <div className="App">
      <NavbarPage></NavbarPage>
      <BannerSection></BannerSection>
      <SkillSet></SkillSet>
      <SkillPage></SkillPage>
      <ProjectsPages></ProjectsPages>
      <ContactPages></ContactPages>
      <FooterPages></FooterPages>
    </div>
  );
}

export default App;



