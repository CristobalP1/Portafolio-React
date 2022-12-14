import logo from './logo.svg';
import './App.css';
import { NavbarPage } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerSection from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavbarPage></NavbarPage>

      <BannerSection></BannerSection>
    </div>
  );
}

export default App;



