import { FileText } from 'lucide-react';
import { medicalRecords } from '../../data/mockData';
import './Patient.css';

export default function MedicalRecords() {
  return (
    <div>
      <div className="dashboard-header">
        <h1>Dossier Médical</h1>
        <p>Historique de vos analyses et examens</p>
      </div>

      <div className="records-list">
        {medicalRecords.map(record => (
          <div key={record.id} className="dash-card record-card">
            <div className="record-header">
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:40,height:40,borderRadius:10,background:'rgba(59,130,246,0.15)',color:'var(--info)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <FileText size={18} />
                </div>
                <div>
                  <div className="record-type">{record.type}</div>
                  <div className="record-date">{record.doctor}</div>
                </div>
              </div>
              <span className="record-date">{new Date(record.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
            </div>
            <div className="record-results">
              {record.results.map((r, i) => (
                <div key={i} className="result-row">
                  <span className="result-name">{r.name}</span>
                  <span className={`result-value ${r.status}`}>{r.value}</span>
                  <span className="result-ref">Réf: {r.ref}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
