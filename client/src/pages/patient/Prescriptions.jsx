import { Pill } from 'lucide-react';
import { prescriptions } from '../../data/mockData';
import './Patient.css';

export default function Prescriptions() {
  return (
    <div>
      <div className="dashboard-header">
        <h1>Mes Ordonnances</h1>
        <p>Consultez vos ordonnances et traitements</p>
      </div>

      <div className="records-list">
        {prescriptions.map(rx => (
          <div key={rx.id} className="dash-card record-card">
            <div className="record-header">
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:40,height:40,borderRadius:10,background:'rgba(168,85,247,0.15)',color:'#A855F7',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Pill size={18} />
                </div>
                <div>
                  <div className="record-type">{rx.diagnosis}</div>
                  <div className="record-date">{rx.doctorName}</div>
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <span className={`badge badge-${rx.status === 'active' ? 'success' : 'info'}`}>
                  {rx.status === 'active' ? 'Active' : 'Complétée'}
                </span>
                <div className="record-date" style={{marginTop:4}}>{rx.date}</div>
              </div>
            </div>
            <div className="record-results">
              {rx.medications.map((med, i) => (
                <div key={i} className="result-row">
                  <div>
                    <span className="result-name" style={{fontWeight:600}}>{med.name}</span>
                    <div style={{fontSize:'0.75rem',color:'var(--gray-500)',marginTop:2}}>
                      {med.dosage} — {med.duration}
                    </div>
                  </div>
                  <span style={{fontSize:'0.8rem',color:'var(--gray-400)'}}>{med.instructions}</span>
                </div>
              ))}
            </div>
            {rx.notes && (
              <div style={{marginTop:12,padding:'10px 12px',background:'rgba(14,164,122,0.05)',borderRadius:8,fontSize:'0.82rem',color:'var(--primary-light)'}}>
                💡 {rx.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
