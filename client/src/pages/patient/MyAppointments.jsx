import { useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { appointments } from '../../data/mockData';
import './Patient.css';

export default function MyAppointments() {
  const [tab, setTab] = useState('upcoming');

  const upcoming = appointments.filter(a => a.status !== 'completed');
  const past = appointments.filter(a => a.status === 'completed');
  const shown = tab === 'upcoming' ? upcoming : past;

  return (
    <div>
      <div className="dashboard-header">
        <h1>Mes Rendez-vous</h1>
        <p>Gérez vos consultations à venir et passées</p>
      </div>

      <div className="appointments-tabs">
        <button className={`tab-btn ${tab === 'upcoming' ? 'active' : ''}`} onClick={() => setTab('upcoming')}>
          À venir ({upcoming.length})
        </button>
        <button className={`tab-btn ${tab === 'past' ? 'active' : ''}`} onClick={() => setTab('past')}>
          Passés ({past.length})
        </button>
      </div>

      <div className="records-list">
        {shown.map(appt => (
          <div key={appt.id} className="dash-card appointment-item" style={{padding: '20px'}}>
            <div className="appt-avatar">{appt.doctorName.charAt(4)}</div>
            <div className="appt-info" style={{flex: 1}}>
              <strong>{appt.doctorName}</strong>
              <span>{appt.specialty}</span>
              <p style={{color: 'var(--gray-400)', fontSize: '0.82rem', marginTop: 4}}>{appt.notes}</p>
            </div>
            <div className="appt-datetime">
              <span className="appt-date"><Calendar size={14} /> {new Date(appt.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
              <span className="appt-time"><Clock size={14} /> {appt.time}</span>
            </div>
            <span className={`badge badge-${appt.status === 'confirmed' ? 'success' : appt.status === 'pending' ? 'warning' : 'info'}`}>
              {appt.status === 'confirmed' ? 'Confirmé' : appt.status === 'pending' ? 'En attente' : 'Terminé'}
            </span>
            {appt.type === 'teleconsultation' && <span className="badge badge-primary">📹 Téléconsultation</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
