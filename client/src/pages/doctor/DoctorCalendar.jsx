import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Doctor.css';

const calendarData = {
  days: ['Dim 16', 'Lun 17', 'Mar 18', 'Mer 19', 'Jeu 20'],
  times: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
  appointments: {
    'Dim 16-09:00': { patient: 'M. Bouzid', type: 'Consultation' },
    'Dim 16-10:00': { patient: 'A. Mebarki', type: 'Suivi' },
    'Dim 16-14:00': { patient: 'H. Boudiaf', type: 'ECG' },
    'Lun 17-09:00': { patient: 'L. Ferhat', type: 'Check-up' },
    'Lun 17-10:00': { patient: 'O. Belkaid', type: 'Urgence' },
    'Lun 17-11:00': { patient: 'N. Yahiaoui', type: 'Suivi grossesse' },
    'Lun 17-14:00': { patient: 'R. Taleb', type: 'Post-op' },
    'Lun 17-15:00': { patient: 'S. Boukhalfa', type: 'Consultation' },
    'Mar 18-09:00': { patient: 'M. Bouzid', type: 'Contrôle tension' },
    'Mar 18-14:00': { patient: 'A. Mebarki', type: 'Téléconsultation' },
    'Mer 19-09:00': { patient: 'H. Boudiaf', type: 'Suivi' },
    'Mer 19-10:00': { patient: 'L. Ferhat', type: 'Résultats' },
    'Jeu 20-14:00': { patient: 'O. Belkaid', type: 'Consultation' },
    'Jeu 20-15:00': { patient: 'N. Yahiaoui', type: 'Échographie' },
    'Jeu 20-16:00': { patient: 'R. Taleb', type: 'Suivi' },
  }
};

export default function DoctorCalendar() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Calendrier</h1>
            <p>Semaine du 16 au 20 Février 2026</p>
          </div>
          <div style={{display:'flex',gap:8}}>
            <button className="btn btn-outline btn-sm" style={{borderColor:'var(--dash-border)',color:'var(--gray-400)'}}>
              <ChevronLeft size={16} /> Précédente
            </button>
            <button className="btn btn-primary btn-sm">Aujourd'hui</button>
            <button className="btn btn-outline btn-sm" style={{borderColor:'var(--dash-border)',color:'var(--gray-400)'}}>
              Suivante <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="dash-card" style={{overflow:'auto'}}>
        <div className="calendar-day-header">
          <div></div>
          {calendarData.days.map(d => (
            <div key={d} className="calendar-day-label">{d}</div>
          ))}
        </div>
        <div className="calendar-view">
          {calendarData.times.map(time => (
            <div key={time} className="calendar-time-row">
              <div className="calendar-time-label">{time}</div>
              {calendarData.days.map(day => {
                const key = `${day}-${time}`;
                const appt = calendarData.appointments[key];
                return (
                  <div key={key} className={`calendar-slot ${appt ? 'booked' : ''}`}>
                    {appt && (
                      <>
                        <div className="slot-patient">{appt.patient}</div>
                        <div className="slot-type">{appt.type}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
