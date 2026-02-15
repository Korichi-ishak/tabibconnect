import { ArrowRight, SkipForward, Check } from 'lucide-react';
import { queueData } from '../../data/mockData';
import './Clinic.css';

export default function QueueManagement() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>File d'attente 📋</h1>
            <p>Gestion en temps réel des patients</p>
          </div>
          <div style={{display:'flex',gap:8}}>
            <button className="btn btn-primary btn-sm">Appeler suivant <ArrowRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="stats-grid" style={{gridTemplateColumns:'repeat(3,1fr)',marginBottom:24}}>
        <div className="dash-card stat-card">
          <div className="stat-icon green">●</div>
          <div className="stat-value">{queueData.filter(q=>q.status==='en_cours').length}</div>
          <div className="stat-label">En consultation</div>
        </div>
        <div className="dash-card stat-card">
          <div className="stat-icon yellow">●</div>
          <div className="stat-value">{queueData.filter(q=>q.status==='en_attente').length}</div>
          <div className="stat-label">En attente</div>
        </div>
        <div className="dash-card stat-card">
          <div className="stat-icon blue">●</div>
          <div className="stat-value">{queueData.filter(q=>q.status==='terminé').length}</div>
          <div className="stat-label">Terminés</div>
        </div>
      </div>

      <div className="queue-full-list">
        {queueData.map(q => (
          <div key={q.id} className="dash-card queue-full-item">
            <div className={`queue-ticket ${q.status === 'en_cours' ? 'active' : q.status === 'en_attente' ? 'waiting' : 'done'}`}>
              {q.number}
              <span>{q.status === 'en_cours' ? 'En cours' : q.status === 'en_attente' ? 'Attente' : 'Fini'}</span>
            </div>
            <div className="queue-patient-info">
              <strong>{q.patient}</strong>
              <span>{q.doctor} • {q.time}</span>
            </div>
            <div>
              {q.status === 'en_attente' && (
                <span className="badge badge-warning">⏱ {q.waitTime} min d'attente</span>
              )}
              {q.status === 'en_cours' && (
                <span className="badge badge-success">● En consultation</span>
              )}
              {q.status === 'terminé' && (
                <span className="badge badge-info">✓ Terminé</span>
              )}
            </div>
            <div className="queue-actions">
              {q.status === 'en_attente' && (
                <button className="btn btn-primary btn-sm"><ArrowRight size={14} /> Appeler</button>
              )}
              {q.status === 'en_cours' && (
                <button className="btn btn-sm" style={{background:'var(--success)',color:'white'}}><Check size={14} /> Terminer</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
