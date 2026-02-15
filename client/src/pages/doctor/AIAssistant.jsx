import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';
import './Doctor.css';

const initialMessages = [
  { role: 'bot', content: "Bonjour Dr. Benali ! Je suis votre assistant IA médical. Je peux vous aider avec :\n\n• Analyse des résultats de laboratoire\n• Vérification des interactions médicamenteuses\n• Suggestions de diagnostics différentiels\n• Rédaction automatique de comptes-rendus\n\nComment puis-je vous aider ?" },
  { role: 'user', content: "Mon patient Mohamed B. a un HbA1c de 6.8% et une tension à 135/82. Il est sous Metformine et Amlodipine. Que recommandes-tu ?" },
  { role: 'bot', content: "📊 **Analyse des paramètres de Mohamed B. :**\n\n**HbA1c : 6.8%** — Légèrement au-dessus du seuil de 6.5%. Le contrôle glycémique est acceptable mais pourrait être amélioré.\n\n**Tension : 135/82 mmHg** — Systolique légèrement élevée (objectif < 130 mmHg pour un patient diabétique).\n\n**💊 Recommandations :**\n1. Envisager un ajustement de la Metformine (passer de 850mg x2 à 1000mg x2)\n2. Ajouter un IEC (Ramipril 2.5mg) pour la néphroprotection\n3. ✅ Aucune interaction détectée entre Metformine + Amlodipine + Ramipril\n\n**📋 Contrôle recommandé :** HbA1c + microalbuminurie dans 3 mois." },
  { role: 'user', content: "Quels sont les effets secondaires possibles du Ramipril à surveiller ?" },
  { role: 'bot', content: "**⚕️ Effets secondaires du Ramipril à surveiller :**\n\n**Fréquents (> 1%) :**\n• Toux sèche persistante (10-15% des patients)\n• Hypotension, surtout en début de traitement\n• Vertiges et fatigue\n\n**Rares mais importants :**\n• Hyperkaliémie → Contrôler le potassium à J7 puis mensuel\n• Insuffisance rénale → Contrôler la créatinine à J7\n• Angio-œdème (urgence) → Informer le patient\n\n**⚠️ Contre-indications à vérifier :**\n• Grossesse\n• Sténose bilatérale des artères rénales\n• Antécédent d'angio-œdème\n\n**Conseil :** Commencer à 2.5mg le soir, augmenter progressivement." }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev,
      { role: 'user', content: input },
      { role: 'bot', content: "🔍 Analyse en cours...\n\nJe traite votre demande. En conditions réelles, l'IA analyserait les données du patient et fournirait une réponse personnalisée basée sur les dernières recommandations médicales.\n\n*Ceci est un prototype de démonstration.*" }
    ]);
    setInput('');
  };

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-header-row">
          <div>
            <h1>Assistant IA 🤖</h1>
            <p>Votre copilote médical intelligent</p>
          </div>
          <span className="badge badge-primary"><Sparkles size={14} /> Alimenté par l'IA GADM</span>
        </div>
      </div>

      <div className="dash-card ai-chat-container">
        <div className="ai-messages dark-scroll">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-message ${msg.role === 'bot' ? 'bot' : 'user'}`}>
              <div className="ai-message-avatar">
                {msg.role === 'bot' ? <Bot size={18} /> : 'AB'}
              </div>
              <div className="ai-message-content">
                {msg.content.split('\n').map((line, j) => (
                  <span key={j}>{line}<br/></span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ai-input-bar">
          <input
            type="text"
            className="form-input form-input-dark"
            placeholder="Posez une question médicale..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
