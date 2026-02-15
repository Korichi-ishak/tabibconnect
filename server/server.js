import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ===== MOCK DATA =====
const doctors = [
  { id: 1, name: "Dr. Amira Benali", specialty: "Cardiologie", city: "Alger", rating: 4.9, price: 3000, available: true },
  { id: 2, name: "Dr. Karim Hadj", specialty: "Pédiatrie", city: "Oran", rating: 4.8, price: 2500, available: true },
  { id: 3, name: "Dr. Fatima Zerhouni", specialty: "Dermatologie", city: "Constantine", rating: 4.7, price: 3500, available: true },
  { id: 4, name: "Dr. Yacine Boumediene", specialty: "Médecine Générale", city: "Annaba", rating: 4.6, price: 1500, available: true },
  { id: 5, name: "Dr. Nadia Khelifi", specialty: "Ophtalmologie", city: "Alger", rating: 4.9, price: 4000, available: false },
  { id: 6, name: "Dr. Mehdi Saïdi", specialty: "Diabétologie", city: "Sétif", rating: 4.8, price: 3000, available: true },
];

// ===== ROUTES =====
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', platform: 'TabibConnect API', version: '1.0.0' });
});

app.get('/api/doctors', (req, res) => {
  const { specialty, city, search } = req.query;
  let filtered = [...doctors];
  if (specialty) filtered = filtered.filter(d => d.specialty === specialty);
  if (city) filtered = filtered.filter(d => d.city === city);
  if (search) filtered = filtered.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
  res.json({ count: filtered.length, data: filtered });
});

app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) return res.status(404).json({ error: 'Médecin non trouvé' });
  res.json(doctor);
});

app.get('/api/stats', (req, res) => {
  res.json({
    totalDoctors: 2000,
    totalPatients: 50000,
    totalClinics: 100,
    totalAppointments: 150000,
    avgSatisfaction: 4.8
  });
});

app.listen(PORT, () => {
  console.log(`🏥 TabibConnect API Server running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});
