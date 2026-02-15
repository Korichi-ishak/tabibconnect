import { Users, Calendar, TrendingUp, AlertTriangle, DollarSign, Clock, Video, Star } from 'lucide-react';
import { doctorStats, doctorPatients } from '../../data/mockData';
import './Doctor.css';

export default function DoctorDashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Tableau de bord 🩺</h1>
          <p>Samedi 15 Février 2026 — Bonne journée, Dr. Benali</p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          { icon: <Users size={22} />, value: doctorStats.totalPatients, label: 'Total patients', change: '+12%', positive: true, color: 'green' },
          { icon: <Calendar size={22} />, value: `${doctorStats.completedToday}/${doctorStats.todayAppointments}`, label: "RDV aujourd'hui", change: '5 restants', positive: true, color: 'blue' },
          { icon: <DollarSign size={22} />, value: `${(doctorStats.monthlyRevenue / 1000).toFixed(0)}K DA`, label: 'Revenus ce mois', change: '+8.5%', positive: true, color: 'yellow' },
          { icon: <AlertTriangle size={22} />, value: `${doctorStats.noShowRate}%`, label: 'Taux no-show', change: '-3.2%', positive: true, color: 'red' },
          { icon: <Video size={22} />, value: doctorStats.teleconsultations, label: 'Téléconsultations', change: '+15%', positive: true, color: 'purple' },
          { icon: <Star size={22} />, value: doctorStats.satisfactionRate, label: 'Satisfaction', change: '', positive: true, color: 'green' }
        ].map((stat, i) => (
          <div key={i} className="dash-card stat-card">
            <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            {stat.change && <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>{stat.change}</span>}
          </div>
        ))}
      </div>

      <div className="data-grid">
        <div className="dash-card">
          <div className="dash-card-header">
            <h3>📊 Patients cette semaine</h3>
          </div>
          <div className="chart-placeholder">
            {doctorStats.weeklyData.map((d, i) => (
              <div key={i} className="chart-bar-row">
                <span className="chart-bar-label">{d.day}</span>
                <div className="chart-bar" style={{width: `${(d.patients / 20) * 100}%`, opacity: d.patients ? 1 : 0.2}}>
                  {d.patients > 0 && <span className="chart-bar-value">{d.patients}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>💰 Revenus (6 mois)</h3>
          </div>
          <div className="chart-placeholder">
            {doctorStats.monthlyData.map((d, i) => (
              <div key={i} className="chart-bar-row">
                <span className="chart-bar-label">{d.month}</span>
                <div className="chart-bar" style={{width: `${(d.revenue / 500000) * 100}%`, background: 'linear-gradient(90deg, var(--accent), var(--accent-light))'}}>
                  <span className="chart-bar-value">{(d.revenue/1000).toFixed(0)}K</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dash-card">
        <div className="dash-card-header">
          <h3>Patients récents</h3>
          <span style={{color:'var(--gray-500)',fontSize:'0.82rem'}}>{doctorPatients.length} patients</span>
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Âge</th>
              <th>Dernière visite</th>
              <th>Condition</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {doctorPatients.map(p => (
              <tr key={p.id}>
                <td style={{fontWeight:600}}>{p.name}</td>
                <td>{p.age} ans</td>
                <td>{p.lastVisit}</td>
                <td>{p.condition}</td>
                <td>
                  <span className={`badge badge-${p.status === 'stable' ? 'success' : p.status === 'suivi' ? 'info' : p.status === 'attention' ? 'warning' : 'danger'}`}>
                    {p.status === 'stable' ? '✓ Stable' : p.status === 'suivi' ? '📋 Suivi' : p.status === 'attention' ? '⚠ Attention' : '🚨 Critique'}
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
