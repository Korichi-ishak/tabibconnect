import { useState } from 'react';
import { FileText, Pill, Save, Printer } from 'lucide-react';
import { doctorPatients } from '../../data/mockData';
import './Doctor.css';

export default function Consultation() {
  const [selectedPatient, setSelectedPatient] = useState(doctorPatients[0]);
  const [notes, setNotes] = useState('Le patient se présente pour un contrôle de routine. Tension artérielle mesurée à 135/82 mmHg.\n\nExamen clinique : RAS. Auscultation cardiaque normale.\n\nPlan : Maintenir le traitement actuel. Contrôle dans 30 jours.');
  const [diagnosis, setDiagnosis] = useState('Hypertension artérielle stade 1 — Suivi régulier');

  return (
    <div>
      <div className="dashboard-header">
        <h1>Consultation</h1>
        <p>Créez et gérez vos consultations en cours</p>
      </div>

      <div className="consultation-layout">
        <div className="consultation-sidebar">
          <div className="dash-card">
            <h3 style={{color:'white',fontSize:'0.95rem',marginBottom:12}}>Patients du jour</h3>
            <div className="patient-select">
              {doctorPatients.slice(0, 5).map(p => (
                <button
                  key={p.id}
                  className={`patient-option ${selectedPatient?.id === p.id ? 'active' : ''}`}
                  onClick={() => setSelectedPatient(p)}
                >
                  <div style={{width:28,height:28,borderRadius:7,background:'linear-gradient(135deg,var(--primary),var(--primary-light))',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:600,fontSize:'0.7rem',flexShrink:0}}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{fontWeight:600,fontSize:'0.82rem'}}>{p.name}</div>
                    <div style={{fontSize:'0.72rem',color:'var(--gray-500)'}}>{p.condition}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="consultation-main">
          <div className="dash-card">
            <div className="dash-card-header">
              <h3>📋 Fiche Patient — {selectedPatient?.name}</h3>
              <span className={`badge badge-${selectedPatient?.status === 'stable' ? 'success' : selectedPatient?.status === 'suivi' ? 'info' : 'warning'}`}>
                {selectedPatient?.status}
              </span>
            </div>
            <div className="profile-grid" style={{gridTemplateColumns:'repeat(3,1fr)',marginBottom:0}}>
              <div className="profile-item">
                <span className="profile-label">Âge</span>
                <span className="profile-value">{selectedPatient?.age} ans</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Dernière visite</span>
                <span className="profile-value">{selectedPatient?.lastVisit}</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Condition</span>
                <span className="profile-value">{selectedPatient?.condition}</span>
              </div>
            </div>
          </div>

          <div className="dash-card">
            <h3 style={{color:'white',fontSize:'0.95rem',marginBottom:16}}>🩺 Diagnostic</h3>
            <input
              type="text"
              className="form-input form-input-dark"
              value={diagnosis}
              onChange={e => setDiagnosis(e.target.value)}
            />
          </div>

          <div className="dash-card">
            <h3 style={{color:'white',fontSize:'0.95rem',marginBottom:16}}>📝 Notes de consultation</h3>
            <textarea
              className="consultation-textarea"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          <div className="consultation-actions">
            <button className="btn btn-primary"><Save size={18} /> Enregistrer</button>
            <button className="btn btn-outline" style={{borderColor:'var(--info)',color:'var(--info)'}}><Pill size={18} /> Ordonnance</button>
            <button className="btn btn-outline" style={{borderColor:'var(--gray-500)',color:'var(--gray-400)'}}><Printer size={18} /> Imprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
