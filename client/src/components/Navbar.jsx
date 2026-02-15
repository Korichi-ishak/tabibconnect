import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isLanding ? 'navbar-solid' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <Heart size={22} />
          </div>
          <span className="logo-text">Tabib<span className="logo-accent">Connect</span></span>
        </Link>

        {isLanding && (
          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>Fonctionnalités</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Tarifs</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Équipe</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}

        <div className="navbar-actions">
          <Link to="/login" className="btn btn-ghost">Se connecter</Link>
          <Link to="/register" className="btn btn-primary btn-sm">S'inscrire</Link>
          {isLanding && (
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
