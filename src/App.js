import logo from './logo.svg';
import './App.css';
import "./App.scss";
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { Skills } from './components/skills/Skills';
import { Project } from './components/projects/Project';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Skills'><Skills /></section>
      <div id='Project'><Project /></div>
      <section id='Contact'><Contact /></section>
    </div>
  );
}

export default App;
