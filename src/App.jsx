import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';
export default function App(){
 const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')||'light');
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme]);
 return <div className="app-shell"><Sidebar theme={theme} onToggle={()=>setTheme(t=>t==='light'?'dark':'light')}/><main className="main-content"><div className="content-wrap"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/experience" element={<Experience/>}/><Route path="/projects" element={<Projects/>}/><Route path="/certificates" element={<Certificates/>}/><Route path="/education" element={<Education/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></div></main></div>
}
