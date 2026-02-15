import { useState } from 'react';
import { Search as SearchIcon, MapPin, Star, Filter } from 'lucide-react';
import { doctors, specialties, cities } from '../../data/mockData';
import { Link } from 'react-router-dom';
import './Patient.css';

export default function SearchDoctors() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');

  const filtered = doctors.filter(d => {
    const matchQuery = !query || d.name.toLowerCase().includes(query.toLowerCase());
    const matchSpec = !specialty || d.specialty === specialty;
    const matchCity = !city || d.city === city;
    return matchQuery && matchSpec && matchCity;
  });

  return (
    <div className="search-page">
      <div className="dashboard-header">
        <h1>Trouver un médecin</h1>
        <p>Recherchez par spécialité, ville ou nom du praticien</p>
      </div>

      <div className="dash-card search-bar">
        <div className="input-icon-wrap">
          <SearchIcon size={18} className="input-icon" />
          <input
            type="text"
            className="form-input form-input-dark"
            placeholder="Nom du médecin..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{paddingLeft: 44}}
          />
        </div>
        <select value={specialty} onChange={e => setSpecialty(e.target.value)}>
          <option value="">Toutes les spécialités</option>
          {specialties.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="">Toutes les villes</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button className="btn btn-primary">
          <Filter size={18} /> Filtrer
        </button>
      </div>

      <p style={{color: 'var(--gray-400)', marginBottom: 20, fontSize: '0.88rem'}}>
        {filtered.length} médecin{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
      </p>

      <div className="doctors-grid">
        {filtered.map(doc => (
          <Link to={`/patient/doctor/${doc.id}`} key={doc.id} style={{textDecoration:'none'}}>
            <div className="dash-card doctor-card">
              <div className="doctor-card-header">
                <div className="doctor-avatar">
                  <img src={doc.image} alt={doc.name} />
                </div>
                <div>
                  <div className="doctor-name">{doc.name}</div>
                  <div className="doctor-specialty">{doc.specialty}</div>
                  <div className="doctor-location"><MapPin size={12} /> {doc.city}</div>
                </div>
              </div>
              <div className="doctor-meta">
                <div className="doctor-rating">
                  <Star size={14} fill="var(--accent)" /> {doc.rating} ({doc.reviews} avis)
                </div>
                <div className="doctor-price">{doc.price.toLocaleString()} DA</div>
              </div>
              <div className="doctor-tags">
                <span className={`badge ${doc.available ? 'badge-success' : 'badge-warning'}`}>
                  {doc.nextAvailable}
                </span>
                <span className="badge badge-info">{doc.experience} ans d'exp.</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
