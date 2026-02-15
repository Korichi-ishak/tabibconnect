import { Package, AlertTriangle, ShoppingCart } from 'lucide-react';
import { inventory } from '../../data/mockData';
import './Clinic.css';

export default function InventoryManagement() {
  const alerts = inventory.filter(i => i.status !== 'ok');

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Gestion des stocks 📦</h1>
            <p>Suivi du matériel médical et médicaments</p>
          </div>
          <button className="btn btn-primary"><ShoppingCart size={18} /> Nouvelle commande</button>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="dash-card" style={{marginBottom:24,borderColor:'rgba(239,68,68,0.3)'}}>
          <div className="dash-card-header">
            <h3 style={{color:'var(--danger)'}}><AlertTriangle size={18} /> Alertes de stock ({alerts.length})</h3>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {alerts.map(item => (
              <div key={item.id} style={{display:'flex',alignItems:'center',gap:12,padding:'8px 12px',background:'rgba(239,68,68,0.05)',borderRadius:8}}>
                <span className={`badge badge-${item.status === 'rupture' ? 'danger' : 'warning'}`}>
                  {item.status === 'rupture' ? '🚨 Rupture' : '⚠ Faible'}
                </span>
                <span style={{color:'var(--dash-text)',fontSize:'0.88rem',flex:1}}>{item.name}</span>
                <span style={{color:'var(--gray-500)',fontSize:'0.82rem'}}>{item.stock} {item.unit} / min. {item.minStock}</span>
                <button className="btn btn-sm btn-primary">Commander</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dash-card">
        <div className="dash-card-header">
          <h3>Inventaire complet</h3>
          <span style={{color:'var(--gray-500)',fontSize:'0.82rem'}}>{inventory.length} items</span>
        </div>
        <div className="inventory-grid">
          {inventory.map(item => {
            const percent = Math.min((item.stock / item.minStock) * 50, 100);
            return (
              <div key={item.id} className="dash-card inventory-item">
                <div className="inventory-icon" style={{background: item.category === 'Médicament' ? 'rgba(168,85,247,0.15)' : item.category === 'Hygiène' ? 'rgba(59,130,246,0.15)' : 'rgba(14,164,122,0.15)'}}>
                  {item.category === 'Médicament' ? '💊' : item.category === 'Hygiène' ? '🧴' : '🩹'}
                </div>
                <div className="inventory-info">
                  <strong>{item.name}</strong>
                  <span>{item.category} • Fournisseur: {item.supplier}</span>
                </div>
                <div className="stock-bar-wrap">
                  <div className="stock-bar">
                    <div className={`stock-bar-fill ${item.status}`} style={{width: `${percent}%`}}></div>
                  </div>
                  <div className="stock-text">{item.stock} / {item.minStock} min. ({item.unit})</div>
                </div>
                <span className={`badge badge-${item.status === 'ok' ? 'success' : item.status === 'faible' ? 'warning' : 'danger'}`}>
                  {item.status === 'ok' ? '✓ OK' : item.status === 'faible' ? '⚠ Faible' : '🚨 Rupture'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
