import { useState } from 'react';
import { FileText, Check, X, AlertTriangle, MessageSquare, Phone } from 'lucide-react';
import { pharmacistPrescriptions } from '../../data/mockData';
import './Pharmacist.css';

export default function PharmacistDashboard() {
  const [prescriptions, setPrescriptions] = useState(pharmacistPrescriptions);
  const pending = prescriptions.filter(p => p.status === 'en_attente');
  const validated = prescriptions.filter(p => p.status === 'validée');

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Pharmacie Centrale 💊</h1>
          <p>Gestion des ordonnances numériques</p>
        </div>
      </div>

      <div className="stats-grid" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
        {[
          { icon: '📄', value: prescriptions.length, label: 'Total ordonnances', color: 'blue' },
          { icon: '⏳', value: pending.length, label: 'En attente', color: 'yellow' },
          { icon: '✅', value: validated.length, label: 'Validées', color: 'green' },
          { icon: '🚨', value: pending.filter(p =>p.urgent).length, label: 'Urgentes', color: 'red' }
        ].map((s, i) => (
          <div key={i} className="dash-card stat-card">
            <div className={`stat-icon ${s.color}`}>{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {pending.length > 0 && (
        <div className="dash-card" style={{marginBottom:24}}>
          <div className="dash-card-header">
            <h3>📋 Ordonnances en attente de validation</h3>
          </div>
          <div className="pharma-prescriptions">
            {pending.map(rx => (
              <div key={rx.id} className={`pharma-rx-card dash-card ${rx.urgent ? 'urgent' : ''}`}>
                <div className="pharma-rx-header">
                  <div>
                    <strong>{rx.patientName}</strong>
                    <span>{rx.doctorName} • {rx.date}</span>
                  </div>
                  {rx.urgent && <span className="badge badge-danger">🚨 Urgent</span>}
                </div>
                <div className="pharma-rx-meds">
                  {rx.medications.map((med, i) => (
                    <div key={i} className="pharma-med-item">
                      <span>{med.name}</span>
                      <span>Qté: {med.quantity}</span>
                      <span className={`badge badge-${med.available ? 'success' : 'danger'}`}>
                        {med.available ? '✓ Dispo' : '✗ Indispo'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pharma-rx-actions">
                  <button className="btn btn-primary btn-sm"><Check size={16} /> Valider</button>
                  <button className="btn btn-sm" style={{background:'rgba(239,68,68,0.1)',color:'var(--danger)'}}><X size={16} /> Rejeter</button>
                  <button className="btn btn-ghost btn-sm" style={{color:'var(--info)'}}><MessageSquare size={16} /> Contacter prescripteur</button>
                  <button className="btn btn-ghost btn-sm" style={{color:'var(--gray-400)'}}><Phone size={16} /> Appeler patient</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dash-card">
        <div className="dash-card-header">
          <h3>✅ Ordonnances validées</h3>
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Prescripteur</th>
              <th>Date</th>
              <th>Médicaments</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {validated.map(rx => (
              <tr key={rx.id}>
                <td style={{fontWeight:600}}>{rx.patientName}</td>
                <td>{rx.doctorName}</td>
                <td>{rx.date}</td>
                <td>{rx.medications.map(m => m.name).join(', ')}</td>
                <td><span className="badge badge-success">✓ Validée</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
