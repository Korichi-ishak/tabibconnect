import { Users, Calendar, Clock, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { queueData } from '../../data/mockData';
import './Clinic.css';

export default function ClinicDashboard() {
  const active = queueData.filter(q => q.status === 'en_cours').length;
  const waiting = queueData.filter(q => q.status === 'en_attente').length;
  const completed = queueData.filter(q => q.status === 'terminé').length;

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Clinique El Nour 🏥</h1>
          <p>Vue d'ensemble — Samedi 15 Février 2026</p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          { icon: <Users size={22} />, value: '12', label: 'Praticiens actifs', color: 'green', change: '' },
          { icon: <Calendar size={22} />, value: '47', label: "RDV aujourd'hui", color: 'blue', change: '+22%' },
          { icon: <Clock size={22} />, value: `${waiting}`, label: 'En attente', color: 'yellow', change: '' },
          { icon: <DollarSign size={22} />, value: '890K DA', label: 'Revenus mensuel', color: 'green', change: '+15%' },
          { icon: <AlertTriangle size={22} />, value: '3', label: 'Alertes stocks', color: 'red', change: '' },
          { icon: <TrendingUp size={22} />, value: '94%', label: 'Satisfaction', color: 'purple', change: '+2%' }
        ].map((stat, i) => (
          <div key={i} className="dash-card stat-card">
            <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            {stat.change && <span className="stat-change positive">{stat.change}</span>}
          </div>
        ))}
      </div>

      <div className="data-grid data-grid-equal">
        <div className="dash-card">
          <div className="dash-card-header">
            <h3>📊 Praticiens — Performance</h3>
          </div>
          <table className="dash-table">
            <thead>
              <tr><th>Praticien</th><th>Spécialité</th><th>Patients/jour</th><th>Satisfaction</th></tr>
            </thead>
            <tbody>
              {[
                { name: 'Dr. Benali', spec: 'Cardiologie', pts: 14, sat: '4.9/5' },
                { name: 'Dr. Hadj', spec: 'Pédiatrie', pts: 18, sat: '4.8/5' },
                { name: 'Dr. Zerhouni', spec: 'Dermatologie', pts: 12, sat: '4.7/5' },
                { name: 'Dr. Saïdi', spec: 'Diabétologie', pts: 10, sat: '4.8/5' }
              ].map((doc, i) => (
                <tr key={i}>
                  <td style={{fontWeight:600}}>{doc.name}</td>
                  <td>{doc.spec}</td>
                  <td>{doc.pts}</td>
                  <td><span className="badge badge-success">{doc.sat}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>⏱️ File d'attente en direct</h3>
            <Link to="/clinic/queue" className="btn btn-ghost btn-sm" style={{color:'var(--primary-light)'}}>Gérer</Link>
          </div>
          <div className="queue-mini-list">
            {queueData.filter(q => q.status !== 'terminé').slice(0, 5).map(q => (
              <div key={q.id} className="queue-mini-item">
                <span className="queue-number">{q.number}</span>
                <div className="queue-mini-info">
                  <strong>{q.patient}</strong>
                  <span>{q.doctor} • {q.time}</span>
                </div>
                <span className={`badge badge-${q.status === 'en_cours' ? 'success' : 'warning'}`}>
                  {q.status === 'en_cours' ? '● En cours' : `${q.waitTime} min`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
