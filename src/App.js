// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Projects from "./components/Projects";
import { IoMdMail } from 'react-icons/io';
import { Card } from 'primereact/card';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Certifications from "./components/Certifications";
import Picture from "./components/Picture";

function App() {
  return (
    
    <Router>
      <div>
        {/* En-tête */}
        <header className="header">
          <Picture />
          <h1>Zineb OUNAIR</h1>
          <h2>Etudiante</h2>
        </header>

        {/* Menu de navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Experiences
              </Link>
            </li>

            
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certifications" className="nav-link">
                Certifications
              </Link>
            </li>

            
          </ul>

        </nav>

        {/* Contenu de la page */}
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            
          </Routes>
        </div>

        {/* Pied de page */}
        <footer className="footer" style={{backgroundColor: '#FFF0F5'}}>
        <p>
          <a href="mailto:ounairzineb@gmail.com" >
          <IoMdMail/>ounairzineb@gmail.com 
          </a>
        </p>
        <p className="small" style={{ marginTop: 0, color: "#9b416e" }}>
                Created by Zineb Ounair
            </p>
      </footer>
        
      </div>
    
    </Router>
  );
}

// Composant Accueil
function Accueil() {
  
  return (
    
    <section className="section">
      <Card title="Zineb OUNAIR" style={{backgroundColor: '#FFF0F5'}}>
        <p className="m-0" style={{ textAlign: 'justify' }}>
          Etudiante en 4 ème année au sein de l'école marocainne des Sciences de l'ingénieur (EMSI), passionnée par
          le domaine de l'informatique. Je souhaite compléter ma formation et acquérir les connaissances et compétences nécessaires pour réaliser dans 
          les meilleurs conditions mon projet professionnel.
        </p>
        <p className="m-0" style={{ textAlign: 'justify' }}>
        Mon cursus m'a permis d'acquérir des solides bases liées à l'informatique telle que le développement autour de langage orienté objet comme 
          JAVA, C#, Spring boot, React js.
        </p>
      </Card>
    </section>
     
    
  );
}

export default App;
