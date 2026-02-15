import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare, Monitor } from 'lucide-react';
import './Doctor.css';

export default function Teleconsultation() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Téléconsultation 📹</h1>
            <p>Consultez vos patients à distance en toute sécurité</p>
          </div>
          <span className="badge badge-success">● En direct</span>
        </div>
      </div>

      <div className="teleconsult-layout">
        <div className="video-area">
          <div className="video-placeholder">
            <div className="video-icon">📹</div>
            <h3 style={{color:'white',marginBottom:8}}>Consultation vidéo</h3>
            <p>En attente du patient...<br/>Mohamed Bouzid • Suivi glycémie</p>
          </div>
          <div className="video-controls">
            <button className="video-btn active"><Mic size={20} /></button>
            <button className="video-btn active"><Video size={20} /></button>
            <button className="video-btn active"><Monitor size={20} /></button>
            <button className="video-btn end"><Phone size={20} /></button>
          </div>
        </div>

        <div className="dash-card chat-panel">
          <div className="dash-card-header">
            <h3><MessageSquare size={16} /> Chat</h3>
          </div>
          <div className="ai-messages" style={{flex:1, minHeight:300}}>
            <div className="ai-message bot">
              <div className="ai-message-avatar" style={{background:'rgba(14,164,122,0.15)',color:'var(--primary-light)'}}>S</div>
              <div className="ai-message-content" style={{background:'rgba(14,164,122,0.06)',border:'1px solid rgba(14,164,122,0.1)'}}>
                Système : La consultation vidéo avec Mohamed Bouzid est prête à démarrer.
              </div>
            </div>
          </div>
          <div className="ai-input-bar">
            <input type="text" className="form-input form-input-dark" placeholder="Envoyer un message..." />
            <button className="btn btn-primary btn-sm">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
