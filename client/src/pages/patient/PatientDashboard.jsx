import { Link } from 'react-router-dom';
import { Calendar, FileText, Search, Clock, Bell, Pill, ChevronRight, MapPin } from 'lucide-react';
import { appointments, prescriptions, currentPatient } from '../../data/mockData';
import './Patient.css';

export default function PatientDashboard() {
  const upcoming = appointments.filter(a => a.status !== 'completed').slice(0, 3);
  const activePrescriptions = prescriptions.filter(p => p.status === 'active');

  return (
    <div className="patient-dash">
      <div className="dashboard-header">
        <div>
          <h1>Bonjour, {currentPatient.name.split(' ')[0]} 👋</h1>
          <p>Voici un aperçu de votre espace santé</p>
        </div>
        <div className="header-actions">
          <Link to="/patient/search" className="btn btn-primary">
            <Search size={18} /> Trouver un médecin
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        {[
          { icon: '📅', value: upcoming.length, label: 'RDV à venir', color: 'green' },
          { icon: '💊', value: activePrescriptions.length, label: 'Ordonnances actives', color: 'blue' },
          { icon: '📋', value: '3', label: 'Analyses récentes', color: 'yellow' },
          { icon: '🔔', value: '2', label: 'Notifications', color: 'red' }
        ].map((s, i) => (
          <div key={i} className="dash-card stat-card">
            <div className={`stat-icon ${s.color}`}>{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="data-grid">
        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Prochains rendez-vous</h3>
            <Link to="/patient/appointments" className="btn btn-ghost btn-sm" style={{color: 'var(--primary-light)'}}>
              Voir tout <ChevronRight size={16} />
            </Link>
          </div>
          {upcoming.map(appt => (
            <div key={appt.id} className="appointment-item">
              <div className="appt-avatar">{appt.doctorName.charAt(4)}</div>
              <div className="appt-info">
                <strong>{appt.doctorName}</strong>
                <span>{appt.specialty}</span>
              </div>
              <div className="appt-datetime">
                <span className="appt-date"><Calendar size={14} /> {new Date(appt.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'short'})}</span>
                <span className="appt-time"><Clock size={14} /> {appt.time}</span>
              </div>
              <span className={`badge badge-${appt.status === 'confirmed' ? 'success' : 'warning'}`}>
                {appt.status === 'confirmed' ? 'Confirmé' : 'En attente'}
              </span>
            </div>
          ))}
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Ordonnances actives</h3>
            <Link to="/patient/prescriptions" className="btn btn-ghost btn-sm" style={{color: 'var(--primary-light)'}}>
              Voir tout <ChevronRight size={16} />
            </Link>
          </div>
          {activePrescriptions.map(rx => (
            <div key={rx.id} className="prescription-item">
              <div className="rx-icon"><Pill size={18} /></div>
              <div className="rx-info">
                <strong>{rx.diagnosis}</strong>
                <span>{rx.doctorName} • {rx.date}</span>
              </div>
              <span className="badge badge-primary">{rx.medications.length} méd.</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-card">
        <div className="dash-card-header">
          <h3>Mon profil médical</h3>
          <Link to="/patient/profile" className="btn btn-ghost btn-sm" style={{color: 'var(--primary-light)'}}>
            Modifier <ChevronRight size={16} />
          </Link>
        </div>
        <div className="profile-grid">
          <div className="profile-item">
            <span className="profile-label">Groupe sanguin</span>
            <span className="profile-value badge badge-danger">{currentPatient.bloodType}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Allergies</span>
            <div className="profile-tags">
              {currentPatient.allergies.map(a => <span key={a} className="badge badge-warning">{a}</span>)}
            </div>
          </div>
          <div className="profile-item">
            <span className="profile-label">Maladies chroniques</span>
            <div className="profile-tags">
              {currentPatient.chronicConditions.map(c => <span key={c} className="badge badge-info">{c}</span>)}
            </div>
          </div>
          <div className="profile-item">
            <span className="profile-label">Assurance</span>
            <span className="profile-value">{currentPatient.insurance.provider} — {currentPatient.insurance.number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
