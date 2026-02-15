import { DollarSign, TrendingUp, Download } from 'lucide-react';
import './Clinic.css';

const invoices = [
  { id: 'FAC-2026-0234', patient: 'Mohamed Bouzid', doctor: 'Dr. Benali', date: '2026-02-15', amount: 3000, status: 'payé' },
  { id: 'FAC-2026-0233', patient: 'Aïcha Mebarki', doctor: 'Dr. Saïdi', date: '2026-02-15', amount: 3000, status: 'payé' },
  { id: 'FAC-2026-0232', patient: 'Hamza Boudiaf', doctor: 'Dr. Benali', date: '2026-02-14', amount: 5000, status: 'payé' },
  { id: 'FAC-2026-0231', patient: 'Leila Ferhat', doctor: 'Dr. Hadj', date: '2026-02-14', amount: 2500, status: 'en_attente' },
  { id: 'FAC-2026-0230', patient: 'Omar Belkaid', doctor: 'Dr. Benali', date: '2026-02-13', amount: 4000, status: 'payé' },
  { id: 'FAC-2026-0229', patient: 'Nour Yahiaoui', doctor: 'Dr. Hadj', date: '2026-02-13', amount: 2500, status: 'payé' },
];

export default function ClinicBilling() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Facturation 💰</h1>
            <p>Facturation centralisée de la clinique</p>
          </div>
          <button className="btn btn-outline btn-sm" style={{borderColor:'var(--dash-border)',color:'var(--gray-400)'}}>
            <Download size={16} /> Exporter
          </button>
        </div>
      </div>

      <div className="billing-summary">
        {[
          { value: '890 000 DA', label: 'Revenus ce mois', color: 'green' },
          { value: '752 000 DA', label: 'Mois dernier', color: 'blue' },
          { value: '+18.3%', label: 'Croissance', color: 'green' },
          { value: '2 500 DA', label: 'Prix moyen', color: 'yellow' }
        ].map((b, i) => (
          <div key={i} className="dash-card billing-item">
            <div className="billing-value">{b.value}</div>
            <div className="billing-label">{b.label}</div>
          </div>
        ))}
      </div>

      <div className="dash-card">
        <div className="dash-card-header">
          <h3>Factures récentes</h3>
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>N° Facture</th>
              <th>Patient</th>
              <th>Praticien</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td style={{fontWeight:600,color:'var(--primary-light)'}}>{inv.id}</td>
                <td>{inv.patient}</td>
                <td>{inv.doctor}</td>
                <td>{inv.date}</td>
                <td style={{fontWeight:600}}>{inv.amount.toLocaleString()} DA</td>
                <td>
                  <span className={`badge badge-${inv.status === 'payé' ? 'success' : 'warning'}`}>
                    {inv.status === 'payé' ? '✓ Payé' : '⏳ En attente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
