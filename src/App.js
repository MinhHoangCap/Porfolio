
import './App.css';
import {HeaderPage} from './components/HeaderPage'
import {FooterPage} from './components/FooterPage'
import { AboutMe } from './components/AboutMe';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Social } from './components/Social';
function App() {
  return (
    <div className="App">
      <HeaderPage/>
      <AboutMe/>
      <Resume/>
      <Contact/>
      <FooterPage/>
      <Social/>
    </div>
  );
}

export default App;
