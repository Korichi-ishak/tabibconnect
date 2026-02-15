import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, Phone, Stethoscope, Users, Building2, Pill, ArrowRight, ArrowLeft } from 'lucide-react';
import './Auth.css';

const roles = [
  { id: 'patient', label: 'Patient', icon: Users, color: '#F5A623', path: '/patient' },
  { id: 'doctor', label: 'Médecin', icon: Stethoscope, color: '#0EA47A', path: '/doctor' },
  { id: 'clinic', label: 'Clinique', icon: Building2, color: '#3B82F6', path: '/clinic' },
  { id: 'pharmacist', label: 'Pharmacien', icon: Pill, color: '#A855F7', path: '/pharmacist' },
];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('patient');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
    } else {
      const role = roles.find(r => r.id === selectedRole);
      navigate(role.path);
    }
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
            <h1>Rejoignez<br/><span className="text-gradient">TabibConnect</span></h1>
            <p>Créez votre compte en quelques minutes et accédez à la première plateforme médicale intelligente algérienne.</p>
          </div>
          <div className="auth-features-mini">
            {[
              { icon: '✨', text: 'Inscription gratuite' },
              { icon: '⚡', text: 'Configuration en 2 minutes' },
              { icon: '🎯', text: 'Adapté à votre rôle' },
              { icon: '📊', text: 'Tableau de bord immédiat' }
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
          <h2>Inscription</h2>
          <p className="auth-subtitle">Étape {step} sur 2</p>

          <div className="step-progress">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}></div>
            <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}></div>
          </div>

          {step === 1 && (
            <>
              <p className="step-label">Choisissez votre rôle</p>
              <div className="role-selector role-selector-lg">
                {roles.map(role => (
                  <button
                    key={role.id}
                    className={`role-btn role-btn-lg ${selectedRole === role.id ? 'active' : ''}`}
                    onClick={() => setSelectedRole(role.id)}
                    style={{ '--role-color': role.color }}
                  >
                    <div className="role-btn-icon" style={{background: `${role.color}15`, color: role.color}}>
                      <role.icon size={24} />
                    </div>
                    <span>{role.label}</span>
                  </button>
                ))}
              </div>
              <button className="btn btn-primary btn-lg" style={{width: '100%'}} onClick={() => setStep(2)}>
                Continuer <ArrowRight size={18} />
              </button>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <button type="button" className="back-btn" onClick={() => setStep(1)}>
                <ArrowLeft size={18} /> Retour
              </button>

              <div className="form-row-grid">
                <div className="form-group">
                  <label>Nom</label>
                  <div className="input-icon-wrap">
                    <User size={18} className="input-icon" />
                    <input type="text" className="form-input" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Prénom</label>
                  <div className="input-icon-wrap">
                    <User size={18} className="input-icon" />
                    <input type="text" className="form-input" placeholder="Votre prénom" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <div className="input-icon-wrap">
                  <Mail size={18} className="input-icon" />
                  <input type="email" className="form-input" placeholder="votre@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <div className="input-icon-wrap">
                  <Phone size={18} className="input-icon" />
                  <input type="tel" className="form-input" placeholder="+213 555 00 00 00" />
                </div>
              </div>

              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-icon-wrap">
                  <Lock size={18} className="input-icon" />
                  <input type="password" className="form-input" placeholder="Minimum 8 caractères" />
                </div>
              </div>

              <label className="checkbox-label" style={{marginBottom: 20}}>
                <input type="checkbox" />
                <span>J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a></span>
              </label>

              <button type="submit" className="btn btn-primary btn-lg" style={{width: '100%'}}>
                Créer mon compte <ArrowRight size={18} />
              </button>
            </form>
          )}

          <p className="auth-switch">
            Déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
