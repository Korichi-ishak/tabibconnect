import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="var(--primary)"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="var(--primary)"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="var(--secondary-dark)"/>
        </svg>
      </div>
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon"><Heart size={20} /></div>
                <span className="logo-text">Tabib<span className="logo-accent">Connect</span></span>
              </div>
              <p>La première plateforme médicale intelligente algérienne, conçue localement pour les défis locaux.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>

            <div className="footer-links-group">
              <h4>Produit</h4>
              <a href="#features">Fonctionnalités</a>
              <a href="#pricing">Tarification</a>
              <Link to="/login">Médecins</Link>
              <Link to="/login">Cliniques</Link>
              <Link to="/login">Patients</Link>
            </div>

            <div className="footer-links-group">
              <h4>Entreprise</h4>
              <a href="#team">À propos</a>
              <a href="#">Blog</a>
              <a href="#">Carrières</a>
              <a href="#">Presse</a>
              <a href="#">Partenaires</a>
            </div>

            <div className="footer-links-group">
              <h4>Contact</h4>
              <a href="mailto:contact@tabibconnect.dz"><Mail size={14} /> contact@tabibconnect.dz</a>
              <a href="tel:+213555000000"><Phone size={14} /> +213 555 00 00 00</a>
              <a href="#"><MapPin size={14} /> Annaba, Algérie</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 TabibConnect. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <a href="#">Conditions d'utilisation</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
