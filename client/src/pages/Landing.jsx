import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Smartphone, BarChart3, Clock, Users, Building2, Pill, Stethoscope, Video, Bot, ChevronDown, ChevronRight, Star, ArrowRight, CheckCircle2, Zap, Globe, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { pricingPlans, testimonials, teamMembers } from '../data/mockData';
import './Landing.css';

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    { q: "Comment fonctionne la prise de rendez-vous en ligne ?", a: "Les patients peuvent rechercher un médecin par spécialité, ville ou nom, consulter les disponibilités en temps réel, et réserver un créneau en quelques clics. Un SMS de confirmation est envoyé automatiquement." },
    { q: "Mes données médicales sont-elles sécurisées ?", a: "Absolument. Toutes les données sont chiffrées de bout en bout et hébergées sur des serveurs certifiés HDS (Hébergement de Données de Santé) en Algérie. Nous respectons strictement le secret médical." },
    { q: "Puis-je utiliser la plateforme sans connexion internet ?", a: "Oui ! Notre application desktop (Electron) permet une utilisation complète hors ligne. Les données sont synchronisées automatiquement dès que la connexion est rétablie." },
    { q: "Combien coûte l'abonnement pour un médecin ?", a: "L'abonnement Médecin Solo commence à 4 000 DA/mois. Ce montant est rapidement rentabilisé car le système réduit les no-shows de 60% en moyenne, soit 2-3 consultations récupérées par jour." },
    { q: "Comment fonctionne l'assistant IA ?", a: "L'IA analyse les notes de consultation en temps réel, suggère des diagnostics différentiels, et génère automatiquement les comptes-rendus médicaux. Elle est conçue comme un outil d'aide, jamais comme un substitut au jugement médical." }
  ];

  return (
    <div className="landing-page">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-grid-pattern"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text animate-fadeInUp">
            <span className="hero-badge">
              <Zap size={14} /> Plateforme HealthTech #1 en Algérie
            </span>
            <h1>
              L'OS de la <span className="text-gradient">Médecine</span> Privée en Algérie
            </h1>
            <p>
              Plateforme intelligente unifiée connectant médecins, cliniques, patients et pharmaciens.
              Transformez votre pratique médicale avec l'IA et le Big Data.
            </p>
            <div className="hero-cta">
              <Link to="/register" className="btn btn-primary btn-lg">
                Commencer gratuitement <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Voir la démo
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="trust-avatar" style={{zIndex: 5-i}}>
                    {['A','K','F','Y','N'][i-1]}
                  </div>
                ))}
              </div>
              <span>Rejoint par <strong>2 000+</strong> professionnels de santé</span>
            </div>
          </div>
          <div className="hero-visual animate-fadeInUp delay-200">
            <div className="hero-card-stack">
              <div className="hero-mock-card hero-mock-1 animate-float">
                <div className="mock-header">
                  <div className="mock-avatar">A</div>
                  <div>
                    <div className="mock-name">Dr. Djebabla Darine</div>
                    <div className="mock-sub">Cardiologie • Annaba</div>
                  </div>
                  <span className="badge badge-success">Disponible</span>
                </div>
                <div className="mock-slots">
                  {['09:00', '10:00', '11:00', '14:00'].map(t => (
                    <span key={t} className="mock-slot">{t}</span>
                  ))}
                </div>
              </div>
              <div className="hero-mock-card hero-mock-2">
                <div className="mock-stat-row">
                  <div className="mock-stat">
                    <span className="mock-stat-val">847</span>
                    <span className="mock-stat-lbl">Patients</span>
                  </div>
                  <div className="mock-stat">
                    <span className="mock-stat-val">98%</span>
                    <span className="mock-stat-lbl">Satisfaction</span>
                  </div>
                  <div className="mock-stat">
                    <span className="mock-stat-val">-60%</span>
                    <span className="mock-stat-lbl">No-shows</span>
                  </div>
                </div>
              </div>
              <div className="hero-mock-card hero-mock-3">
                <div className="mock-ai">
                  <Bot size={18} />
                  <span>Analyse IA en cours...</span>
                  <div className="mock-progress"><div className="mock-progress-fill"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar-grid">
            {[
              { icon: Users, value: "2 000+", label: "Médecins inscrits" },
              { icon: Heart, value: "50 000+", label: "Patients actifs" },
              { icon: Building2, value: "100+", label: "Cliniques partenaires" },
              { icon: Globe, value: "48", label: "Wilayas couvertes" }
            ].map((stat, i) => (
              <div key={i} className="stats-bar-item animate-fadeInUp" style={{animationDelay: `${i*100}ms`}}>
                <stat.icon size={24} className="stats-bar-icon" />
                <span className="stats-bar-value">{stat.value}</span>
                <span className="stats-bar-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features section-padding" id="features">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">Fonctionnalités</span>
            <h2>Un écosystème complet pour <span className="text-gradient">chaque acteur</span></h2>
            <p>Plateforme Web, Mobile et Desktop connectant quatre acteurs clés du système de santé algérien.</p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: Stethoscope, color: '#0EA47A', title: 'Pour les Médecins',
                features: ['Dossier Médical Numérique (DMN)', 'IA de consultation assistée', 'Modules spécialisés (diabétologie, cardiologie)', 'Agenda en ligne avec rappels SMS'],
                desc: "Optimisez votre pratique avec des outils intelligents."
              },
              {
                icon: Building2, color: '#3B82F6', title: 'Pour les Cliniques',
                features: ['Gestion multi-praticiens', 'File d\'attente digitale', 'Gestion des stocks et alertes', 'Facturation centralisée'],
                desc: "Un mini-ERP conçu pour les cliniques algériennes."
              },
              {
                icon: Users, color: '#F5A623', title: 'Pour les Patients',
                features: ['Prise de RDV en ligne 24h/24', 'Accès sécurisé aux ordonnances', 'Historique médical complet', 'Téléconsultation vidéo'],
                desc: "Votre santé, accessible à tout moment."
              },
              {
                icon: Pill, color: '#A855F7', title: 'Pour les Pharmaciens',
                features: ['Validation des ordonnances numériques', 'Communication avec le prescripteur', 'Réduction des erreurs de lecture', 'Historique des dispensations'],
                desc: "Fiabilisez la chaîne du médicament."
              }
            ].map((f, i) => (
              <div key={i} className="feature-card card animate-fadeInUp" style={{animationDelay: `${i*150}ms`}}>
                <div className="feature-icon" style={{background: `${f.color}15`, color: f.color}}>
                  <f.icon size={26} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="feature-list">
                  {f.features.map((feat, j) => (
                    <li key={j}><CheckCircle2 size={16} /> {feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">Comment ça marche</span>
            <h2>Trois étapes pour <span className="text-gradient">tout changer</span></h2>
          </div>
          <div className="steps-grid">
            {[
              { num: "01", title: "Inscrivez-vous", desc: "Créez votre compte en 2 minutes. Médecin, clinique ou patient, nous avons un espace pour vous.", icon: Smartphone },
              { num: "02", title: "Configurez votre espace", desc: "Personnalisez votre agenda, importez vos patients ou recherchez un spécialiste près de chez vous.", icon: Shield },
              { num: "03", title: "Transformez votre pratique", desc: "Profitez de l'IA, des rappels automatiques et d'une gestion simplifiée au quotidien.", icon: BarChart3 }
            ].map((step, i) => (
              <div key={i} className="step-card animate-fadeInUp" style={{animationDelay: `${i*150}ms`}}>
                <span className="step-number">{step.num}</span>
                <div className="step-icon-wrap">
                  <step.icon size={28} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-section section-padding">
        <div className="container">
          <div className="ai-content">
            <div className="ai-text animate-slideInLeft">
              <span className="section-badge">Intelligence Artificielle</span>
              <h2>Spécialité GADM :<br/><span className="text-gradient">Big Data & IA Médicale</span></h2>
              <p>En tant que projet issu de la spécialité Gestion et Analyse des Données Massives, la plateforme intègre des capacités uniques :</p>
              <div className="ai-features">
                {[
                  { icon: Bot, title: "Analyse prédictive", desc: "Détection précoce des anomalies dans les paramètres vitaux des patients chroniques." },
                  { icon: BarChart3, title: "Statistiques épidémiologiques", desc: "Analyse des tendances pour aider les cliniques à anticiper la demande." },
                  { icon: Lock, title: "Données souveraines", desc: "Base de données de santé nationale hébergée en Algérie avec chiffrement HDS." }
                ].map((feat, i) => (
                  <div key={i} className="ai-feature">
                    <div className="ai-feature-icon"><feat.icon size={20} /></div>
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ai-visual animate-slideInRight">
              <div className="ai-mockup">
                <div className="ai-chat-msg ai-msg-bot">
                  <Bot size={16} />
                  <div>
                    <p>Analyse des résultats du patient Mohamed B. :</p>
                    <p><strong>HbA1c : 6.8%</strong> — Légèrement au-dessus du seuil (6.5%). Recommandation : ajustement du traitement.</p>
                  </div>
                </div>
                <div className="ai-chat-msg ai-msg-user">
                  <p>Quelles sont les interactions médicamenteuses à vérifier ?</p>
                </div>
                <div className="ai-chat-msg ai-msg-bot">
                  <Bot size={16} />
                  <div>
                    <p>Vérification en cours... ✓ Aucune interaction détectée entre Metformine et Amlodipine. Le traitement combiné est sûr.</p>
                  </div>
                </div>
                <div className="ai-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing section-padding" id="pricing">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">Tarification</span>
            <h2>Des prix adaptés au <span className="text-gradient">marché algérien</span></h2>
            <p>Rentabilisé dès le premier jour grâce à la réduction des no-shows et l'optimisation de votre agenda.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`pricing-card card animate-fadeInUp ${plan.popular ? 'popular' : ''}`} style={{animationDelay: `${i*150}ms`}}>
                {plan.popular && <span className="popular-badge">Le plus populaire</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="pricing-price">
                  <span className="price-value">{plan.price}</span>
                  {plan.period && <span className="price-period">{plan.period}</span>}
                </div>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><CheckCircle2 size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/register" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-lg`} style={{width: '100%'}}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">Témoignages</span>
            <h2>Ils nous font <span className="text-gradient">confiance</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card card animate-fadeInUp" style={{animationDelay: `${i*150}ms`}}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p className="testimonial-text">"{t.content}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team section-padding" id="team">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">Notre équipe</span>
            <h2>Les visionnaires derrière <span className="text-gradient">TabibConnect</span></h2>
            <p>Projet de fin d'études — Université Badji Mokhtar, Annaba (GADM 2026)</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <div key={i} className="team-card card animate-fadeInUp" style={{animationDelay: `${i*150}ms`}}>
                <div className="team-avatar">{m.name.split(' ').map(n => n[0]).join('')}</div>
                <h4>{m.name}</h4>
                <span className="team-role">{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-padding">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <span className="section-badge">FAQ</span>
            <h2>Questions <span className="text-gradient">fréquentes</span></h2>
          </div>
          <div className="faq-list">
            {faqItems.map((faq, i) => (
              <div key={i} className={`faq-item card ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  {openFaq === i ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-card animate-fadeInUp">
            <h2>Prêt à transformer votre pratique médicale ?</h2>
            <p>Rejoignez les milliers de professionnels de santé qui ont déjà choisi TabibConnect.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                Commencer maintenant <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="btn btn-ghost btn-lg" style={{color: 'white', borderColor: 'rgba(255,255,255,0.3)', border: '2px solid'}}>
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
