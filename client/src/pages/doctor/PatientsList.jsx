import { useState } from 'react';
import { Search, FileText, Plus } from 'lucide-react';
import { doctorPatients } from '../../data/mockData';
import './Doctor.css';

export default function PatientsList() {
  const [query, setQuery] = useState('');

  const filtered = doctorPatients.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.condition.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Mes Patients</h1>
            <p>{doctorPatients.length} patients enregistrés</p>
          </div>
          <button className="btn btn-primary"><Plus size={18} /> Nouveau patient</button>
        </div>
      </div>

      <div className="dash-card" style={{marginBottom:24}}>
        <div className="input-icon-wrap">
          <Search size={18} className="input-icon" />
          <input
            type="text"
            className="form-input form-input-dark"
            placeholder="Rechercher un patient..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{paddingLeft: 44}}
          />
        </div>
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Âge</th>
              <th>Dernière visite</th>
              <th>Condition</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>
                  <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <div style={{width:32,height:32,borderRadius:8,background:'linear-gradient(135deg,var(--primary),var(--primary-light))',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'0.75rem',flexShrink:0}}>
                      {p.name.charAt(0)}
                    </div>
                    <span style={{fontWeight:600}}>{p.name}</span>
                  </div>
                </td>
                <td>{p.age} ans</td>
                <td>{p.lastVisit}</td>
                <td>{p.condition}</td>
                <td>
                  <span className={`badge badge-${p.status === 'stable' ? 'success' : p.status === 'suivi' ? 'info' : p.status === 'attention' ? 'warning' : 'danger'}`}>
                    {p.status === 'stable' ? '✓ Stable' : p.status === 'suivi' ? '📋 Suivi' : p.status === 'attention' ? '⚠ Attention' : '🚨 Critique'}
                  </span>
                </td>
                <td>
                  <button className="btn btn-ghost btn-sm" style={{color:'var(--primary-light)'}}>
                    <FileText size={16} /> Dossier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
