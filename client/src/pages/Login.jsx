import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, Eye, EyeOff, Stethoscope, Users, Building2, Pill } from 'lucide-react';
import './Auth.css';

const roles = [
  { id: 'patient', label: 'Patient', icon: Users, color: '#F5A623', path: '/patient' },
  { id: 'doctor', label: 'Médecin', icon: Stethoscope, color: '#0EA47A', path: '/doctor' },
  { id: 'clinic', label: 'Clinique', icon: Building2, color: '#3B82F6', path: '/clinic' },
  { id: 'pharmacist', label: 'Pharmacien', icon: Pill, color: '#A855F7', path: '/pharmacist' },
];

export default function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = roles.find(r => r.id === selectedRole);
    navigate(role.path);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <Link to="/" className="auth-logo">
            <div className="logo-icon"><Heart size={20} /></div>
            <span className="logo-text">Tabib<span className="logo-accent">Connect</span></span>
          </Link>
          <div className="auth-left-text">
            <h1>Bienvenue sur<br/><span className="text-gradient">TabibConnect</span></h1>
            <p>Connectez-vous pour accéder à votre espace personnalisé et profiter de toutes les fonctionnalités de la plateforme.</p>
          </div>
          <div className="auth-features-mini">
            {[
              { icon: '🏥', text: 'Gestion complète du cabinet' },
              { icon: '📱', text: 'Accessible partout, tout le temps' },
              { icon: '🤖', text: 'Assistant IA intégré' },
              { icon: '🔒', text: 'Données 100% sécurisées' }
            ].map((f, i) => (
              <div key={i} className="auth-feature-mini">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Connexion</h2>
          <p className="auth-subtitle">Choisissez votre rôle et connectez-vous</p>

          <div className="role-selector">
            {roles.map(role => (
              <button
                key={role.id}
                className={`role-btn ${selectedRole === role.id ? 'active' : ''}`}
                onClick={() => setSelectedRole(role.id)}
                style={{ '--role-color': role.color }}
              >
                <role.icon size={18} />
                <span>{role.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <div className="input-icon-wrap">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <div className="input-icon-wrap">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="button" className="input-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-row">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="forgot-link">Mot de passe oublié ?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{width: '100%'}}>
              Se connecter
            </button>
          </form>

          <p className="auth-switch">
            Pas encore de compte ? <Link to="/register">S'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
