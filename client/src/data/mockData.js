export const doctors = [
  {
    id: 1,
    name: "Dr. Amira Benali",
    specialty: "Cardiologie",
    city: "Alger",
    address: "Rue Didouche Mourad, Alger Centre",
    rating: 4.9,
    reviews: 234,
    price: 3000,
    available: true,
    nextAvailable: "Aujourd'hui",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    experience: 15,
    languages: ["Arabe", "Français", "Anglais"],
    education: "Université d'Alger - Faculté de Médecine",
    bio: "Spécialiste en cardiologie interventionnelle avec 15 ans d'expérience. Ancienne chef de service au CHU Mustapha.",
    schedule: {
      "Dim": ["09:00", "10:00", "11:00", "14:00", "15:00"],
      "Lun": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Mar": ["09:00", "10:00", "14:00", "15:00"],
      "Mer": ["09:00", "10:00", "11:00"],
      "Jeu": ["14:00", "15:00", "16:00", "17:00"]
    }
  },
  {
    id: 2,
    name: "Dr. Karim Hadj",
    specialty: "Pédiatrie",
    city: "Oran",
    address: "Boulevard de la Soummam, Oran",
    rating: 4.8,
    reviews: 189,
    price: 2500,
    available: true,
    nextAvailable: "Demain",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    experience: 12,
    languages: ["Arabe", "Français"],
    education: "Université d'Oran - Faculté de Médecine",
    bio: "Pédiatre passionné spécialisé dans le développement de l'enfant et les maladies infantiles.",
    schedule: {
      "Dim": ["08:00", "09:00", "10:00", "11:00"],
      "Lun": ["08:00", "09:00", "10:00", "14:00", "15:00"],
      "Mar": ["08:00", "09:00", "10:00", "11:00", "14:00"],
      "Mer": [],
      "Jeu": ["08:00", "09:00", "10:00", "11:00"]
    }
  },
  {
    id: 3,
    name: "Dr. Fatima Zerhouni",
    specialty: "Dermatologie",
    city: "Constantine",
    address: "Cité des Frères Abbas, Constantine",
    rating: 4.7,
    reviews: 156,
    price: 3500,
    available: true,
    nextAvailable: "Aujourd'hui",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964c4b8?w=200&h=200&fit=crop&crop=face",
    experience: 10,
    languages: ["Arabe", "Français", "Anglais"],
    education: "Université de Constantine - Faculté de Médecine",
    bio: "Dermatologue spécialisée en dermatologie esthétique et traitement des maladies de peau.",
    schedule: {
      "Dim": ["09:00", "10:00", "11:00", "14:00"],
      "Lun": ["09:00", "10:00", "11:00"],
      "Mar": ["14:00", "15:00", "16:00"],
      "Mer": ["09:00", "10:00", "11:00", "14:00", "15:00"],
      "Jeu": ["09:00", "10:00"]
    }
  },
  {
    id: 4,
    name: "Dr. Yacine Boumediene",
    specialty: "Médecine Générale",
    city: "Annaba",
    address: "Rue Ibn Khaldoun, Annaba",
    rating: 4.6,
    reviews: 312,
    price: 1500,
    available: true,
    nextAvailable: "Aujourd'hui",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
    experience: 8,
    languages: ["Arabe", "Français"],
    education: "Université Badji Mokhtar - Annaba",
    bio: "Médecin généraliste dévoué avec une approche holistique de la médecine préventive.",
    schedule: {
      "Dim": ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Lun": ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00"],
      "Mar": ["08:00", "09:00", "10:00", "11:00"],
      "Mer": ["14:00", "15:00", "16:00", "17:00"],
      "Jeu": ["08:00", "09:00", "10:00", "11:00", "14:00"]
    }
  },
  {
    id: 5,
    name: "Dr. Nadia Khelifi",
    specialty: "Ophtalmologie",
    city: "Alger",
    address: "Rue Hassiba Ben Bouali, Alger",
    rating: 4.9,
    reviews: 201,
    price: 4000,
    available: false,
    nextAvailable: "Lundi prochain",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face",
    experience: 20,
    languages: ["Arabe", "Français", "Anglais"],
    education: "Université d'Alger - Spécialisation Paris",
    bio: "Ophtalmologiste de renom, pionnière de la chirurgie réfractive en Algérie.",
    schedule: {
      "Dim": [],
      "Lun": ["09:00", "10:00", "11:00", "14:00", "15:00"],
      "Mar": ["09:00", "10:00", "11:00"],
      "Mer": ["09:00", "10:00", "11:00", "14:00"],
      "Jeu": ["14:00", "15:00", "16:00"]
    }
  },
  {
    id: 6,
    name: "Dr. Mehdi Saïdi",
    specialty: "Diabétologie",
    city: "Sétif",
    address: "Avenue 1er Novembre, Sétif",
    rating: 4.8,
    reviews: 178,
    price: 3000,
    available: true,
    nextAvailable: "Aujourd'hui",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
    experience: 14,
    languages: ["Arabe", "Français"],
    education: "Université Ferhat Abbas - Sétif",
    bio: "Endocrinologue-diabétologue spécialisé dans le suivi des patients diabétiques de type 1 et 2.",
    schedule: {
      "Dim": ["08:30", "09:30", "10:30", "14:00", "15:00"],
      "Lun": ["08:30", "09:30", "10:30"],
      "Mar": ["08:30", "09:30", "10:30", "14:00", "15:00", "16:00"],
      "Mer": ["08:30", "09:30"],
      "Jeu": ["14:00", "15:00", "16:00"]
    }
  }
];

export const specialties = [
  "Médecine Générale", "Cardiologie", "Pédiatrie", "Dermatologie",
  "Ophtalmologie", "Diabétologie", "Gynécologie", "Orthopédie",
  "ORL", "Neurologie", "Psychiatrie", "Pneumologie",
  "Gastro-entérologie", "Urologie", "Rhumatologie"
];

export const cities = [
  "Alger", "Oran", "Constantine", "Annaba", "Sétif",
  "Batna", "Blida", "Tlemcen", "Béjaïa", "Tizi Ouzou"
];

export const appointments = [
  {
    id: 1,
    doctorId: 1,
    doctorName: "Dr. Amira Benali",
    specialty: "Cardiologie",
    date: "2026-02-16",
    time: "10:00",
    status: "confirmed",
    type: "consultation",
    notes: "Contrôle de routine - Suivi tension artérielle"
  },
  {
    id: 2,
    doctorId: 4,
    doctorName: "Dr. Yacine Boumediene",
    specialty: "Médecine Générale",
    date: "2026-02-18",
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    notes: "Douleurs abdominales récurrentes"
  },
  {
    id: 3,
    doctorId: 6,
    doctorName: "Dr. Mehdi Saïdi",
    specialty: "Diabétologie",
    date: "2026-02-20",
    time: "09:30",
    status: "pending",
    type: "teleconsultation",
    notes: "Suivi glycémie mensuel"
  },
  {
    id: 4,
    doctorId: 3,
    doctorName: "Dr. Fatima Zerhouni",
    specialty: "Dermatologie",
    date: "2026-01-28",
    time: "11:00",
    status: "completed",
    type: "consultation",
    notes: "Examen dermatologique - Prescription crème"
  },
  {
    id: 5,
    doctorId: 2,
    doctorName: "Dr. Karim Hadj",
    specialty: "Pédiatrie",
    date: "2026-01-15",
    time: "09:00",
    status: "completed",
    type: "consultation",
    notes: "Visite de routine pour l'enfant - Vaccins à jour"
  }
];

export const prescriptions = [
  {
    id: 1,
    doctorName: "Dr. Amira Benali",
    date: "2026-01-28",
    diagnosis: "Hypertension artérielle stade 1",
    medications: [
      { name: "Amlodipine 5mg", dosage: "1 comprimé/jour", duration: "30 jours", instructions: "Le matin au petit-déjeuner" },
      { name: "Ramipril 2.5mg", dosage: "1 comprimé/jour", duration: "30 jours", instructions: "Le soir" }
    ],
    status: "active",
    notes: "Contrôle de la tension dans 30 jours. Régime hyposodé recommandé."
  },
  {
    id: 2,
    doctorName: "Dr. Fatima Zerhouni",
    date: "2026-01-28",
    diagnosis: "Dermatite atopique",
    medications: [
      { name: "Dermocorticoïde (Bétaméthasone) 0.05%", dosage: "2 applications/jour", duration: "14 jours", instructions: "Appliquer en couche mince sur les zones affectées" },
      { name: "Émollient (Dexeryl)", dosage: "3 applications/jour", duration: "30 jours", instructions: "Appliquer sur tout le corps" }
    ],
    status: "active",
    notes: "Éviter les savons agressifs. Revoir dans 2 semaines."
  },
  {
    id: 3,
    doctorName: "Dr. Mehdi Saïdi",
    date: "2026-01-10",
    diagnosis: "Diabète de type 2 - Suivi régulier",
    medications: [
      { name: "Metformine 850mg", dosage: "2 comprimés/jour", duration: "90 jours", instructions: "Matin et soir pendant les repas" },
      { name: "Glimepiride 2mg", dosage: "1 comprimé/jour", duration: "90 jours", instructions: "Le matin avant le petit-déjeuner" }
    ],
    status: "completed",
    notes: "HbA1c à contrôler dans 3 mois. Activité physique recommandée."
  }
];

export const medicalRecords = [
  {
    id: 1,
    type: "Analyse de sang",
    date: "2026-01-25",
    doctor: "Dr. Yacine Boumediene",
    results: [
      { name: "Glycémie à jeun", value: "1.12 g/L", status: "normal", ref: "0.70 - 1.10 g/L" },
      { name: "HbA1c", value: "6.8%", status: "warning", ref: "< 6.5%" },
      { name: "Cholestérol total", value: "2.10 g/L", status: "normal", ref: "< 2.40 g/L" },
      { name: "Triglycérides", value: "1.45 g/L", status: "normal", ref: "< 1.50 g/L" },
      { name: "Créatinine", value: "9.2 mg/L", status: "normal", ref: "7.0 - 13.0 mg/L" }
    ]
  },
  {
    id: 2,
    type: "ECG",
    date: "2026-01-20",
    doctor: "Dr. Amira Benali",
    results: [
      { name: "Rythme", value: "Sinusal", status: "normal", ref: "Sinusal" },
      { name: "Fréquence", value: "78 bpm", status: "normal", ref: "60-100 bpm" },
      { name: "Axe QRS", value: "Normal", status: "normal", ref: "Normal" },
      { name: "Intervalle PR", value: "0.16s", status: "normal", ref: "0.12-0.20s" }
    ]
  },
  {
    id: 3,
    type: "Tension artérielle",
    date: "2026-01-15",
    doctor: "Dr. Amira Benali",
    results: [
      { name: "Systolique", value: "135 mmHg", status: "warning", ref: "< 130 mmHg" },
      { name: "Diastolique", value: "82 mmHg", status: "normal", ref: "< 85 mmHg" }
    ]
  }
];

export const currentPatient = {
  id: 1,
  name: "Mohamed Bouzid",
  email: "mohamed.bouzid@email.com",
  phone: "+213 555 12 34 56",
  dateOfBirth: "1988-03-15",
  gender: "Homme",
  bloodType: "A+",
  allergies: ["Pénicilline", "Aspirine"],
  chronicConditions: ["Hypertension artérielle", "Diabète type 2"],
  emergencyContact: { name: "Sara Bouzid", phone: "+213 555 78 90 12", relation: "Épouse" },
  insurance: { provider: "CNAS", number: "ALG-2024-889012", validity: "2026-12-31" }
};

export const doctorPatients = [
  { id: 1, name: "Mohamed Bouzid", age: 37, lastVisit: "2026-01-28", condition: "Hypertension", status: "stable" },
  { id: 2, name: "Aïcha Mebarki", age: 45, lastVisit: "2026-02-10", condition: "Diabète type 2", status: "suivi" },
  { id: 3, name: "Hamza Boudiaf", age: 52, lastVisit: "2026-02-05", condition: "Arythmie", status: "attention" },
  { id: 4, name: "Leila Ferhat", age: 28, lastVisit: "2026-01-30", condition: "Check-up", status: "stable" },
  { id: 5, name: "Omar Belkaid", age: 61, lastVisit: "2026-02-12", condition: "Insuffisance cardiaque", status: "critique" },
  { id: 6, name: "Nour Yahiaoui", age: 33, lastVisit: "2026-02-14", condition: "Suivi grossesse", status: "suivi" },
  { id: 7, name: "Rachid Taleb", age: 48, lastVisit: "2026-02-01", condition: "Post-opératoire", status: "suivi" },
  { id: 8, name: "Samia Boukhalfa", age: 55, lastVisit: "2026-01-22", condition: "HTA résistante", status: "attention" }
];

export const doctorStats = {
  totalPatients: 847,
  todayAppointments: 12,
  completedToday: 7,
  noShowRate: 8.5,
  monthlyRevenue: 456000,
  lastMonthRevenue: 420000,
  satisfactionRate: 4.8,
  teleconsultations: 23,
  weeklyData: [
    { day: "Dim", patients: 14 },
    { day: "Lun", patients: 18 },
    { day: "Mar", patients: 12 },
    { day: "Mer", patients: 8 },
    { day: "Jeu", patients: 16 },
    { day: "Ven", patients: 0 },
    { day: "Sam", patients: 0 }
  ],
  monthlyData: [
    { month: "Sep", revenue: 380000 },
    { month: "Oct", revenue: 410000 },
    { month: "Nov", revenue: 395000 },
    { month: "Déc", revenue: 440000 },
    { month: "Jan", revenue: 420000 },
    { month: "Fév", revenue: 456000 }
  ]
};

export const queueData = [
  { id: 1, number: "A-001", patient: "Mohamed Bouzid", doctor: "Dr. Benali", time: "09:00", status: "en_cours", waitTime: 0 },
  { id: 2, number: "A-002", patient: "Aïcha Mebarki", doctor: "Dr. Benali", time: "09:30", status: "en_attente", waitTime: 15 },
  { id: 3, number: "A-003", patient: "Hamza Boudiaf", doctor: "Dr. Benali", time: "10:00", status: "en_attente", waitTime: 35 },
  { id: 4, number: "B-001", patient: "Leila Ferhat", doctor: "Dr. Hadj", time: "09:00", status: "terminé", waitTime: 0 },
  { id: 5, number: "B-002", patient: "Omar Belkaid", doctor: "Dr. Hadj", time: "09:30", status: "en_cours", waitTime: 5 },
  { id: 6, number: "B-003", patient: "Nour Yahiaoui", doctor: "Dr. Hadj", time: "10:00", status: "en_attente", waitTime: 25 },
  { id: 7, number: "C-001", patient: "Rachid Taleb", doctor: "Dr. Zerhouni", time: "09:00", status: "en_cours", waitTime: 0 },
  { id: 8, number: "C-002", patient: "Samia Boukhalfa", doctor: "Dr. Zerhouni", time: "09:30", status: "en_attente", waitTime: 10 }
];

export const inventory = [
  { id: 1, name: "Gants médicaux (boîte)", category: "Consommable", stock: 45, minStock: 20, unit: "boîtes", supplier: "MedSupply DZ", lastOrder: "2026-02-01", status: "ok" },
  { id: 2, name: "Masques chirurgicaux", category: "Consommable", stock: 12, minStock: 50, unit: "boîtes", supplier: "MedSupply DZ", lastOrder: "2026-01-20", status: "rupture" },
  { id: 3, name: "Seringues 5ml", category: "Consommable", stock: 200, minStock: 100, unit: "pièces", supplier: "PharmaDZ", lastOrder: "2026-02-05", status: "ok" },
  { id: 4, name: "Compresses stériles", category: "Consommable", stock: 30, minStock: 25, unit: "paquets", supplier: "MedSupply DZ", lastOrder: "2026-02-10", status: "faible" },
  { id: 5, name: "Paracétamol 500mg", category: "Médicament", stock: 80, minStock: 40, unit: "boîtes", supplier: "Saidal", lastOrder: "2026-02-08", status: "ok" },
  { id: 6, name: "Ibuprofène 400mg", category: "Médicament", stock: 15, minStock: 30, unit: "boîtes", supplier: "Saidal", lastOrder: "2026-01-25", status: "faible" },
  { id: 7, name: "Gel hydroalcoolique", category: "Hygiène", stock: 8, minStock: 15, unit: "litres", supplier: "CleanMed", lastOrder: "2026-02-01", status: "rupture" },
  { id: 8, name: "Pansements adhésifs", category: "Consommable", stock: 150, minStock: 50, unit: "pièces", supplier: "PharmaDZ", lastOrder: "2026-02-12", status: "ok" }
];

export const pharmacistPrescriptions = [
  {
    id: 1,
    patientName: "Mohamed Bouzid",
    doctorName: "Dr. Amira Benali",
    date: "2026-02-15",
    status: "en_attente",
    medications: [
      { name: "Amlodipine 5mg", quantity: 30, available: true },
      { name: "Ramipril 2.5mg", quantity: 30, available: true }
    ],
    urgent: false
  },
  {
    id: 2,
    patientName: "Aïcha Mebarki",
    doctorName: "Dr. Mehdi Saïdi",
    date: "2026-02-15",
    status: "en_attente",
    medications: [
      { name: "Metformine 850mg", quantity: 60, available: true },
      { name: "Glimepiride 2mg", quantity: 30, available: false }
    ],
    urgent: true
  },
  {
    id: 3,
    patientName: "Hamza Boudiaf",
    doctorName: "Dr. Amira Benali",
    date: "2026-02-14",
    status: "validée",
    medications: [
      { name: "Bisoprolol 5mg", quantity: 30, available: true },
      { name: "Aspirine 100mg", quantity: 30, available: true }
    ],
    urgent: false
  },
  {
    id: 4,
    patientName: "Omar Belkaid",
    doctorName: "Dr. Amira Benali",
    date: "2026-02-13",
    status: "validée",
    medications: [
      { name: "Furosémide 40mg", quantity: 30, available: true },
      { name: "Spironolactone 25mg", quantity: 30, available: true },
      { name: "Digoxine 0.25mg", quantity: 30, available: true }
    ],
    urgent: true
  }
];

export const teamMembers = [
  { name: "Korichi Ishak", role: "Fondateur & CEO", bio: "Ingénieur GADM, passionné par l'innovation en santé" },
  { name: "Halima Bahi", role: "Directrice Scientifique", bio: "Encadrante spécialisée en Big Data et systèmes d'information" },
  { name: "Amine Rahmani", role: "CTO", bio: "Expert en architecture logicielle et systèmes distribués" },
  { name: "Lina Boucherit", role: "Directrice Produit", bio: "Spécialiste UX/UI et expérience patient digitale" }
];

export const testimonials = [
  {
    name: "Dr. Samir Kaci",
    role: "Cardiologue - Alger",
    content: "TabibConnect a transformé ma pratique. Je gère mes patients de manière fluide et les rappels automatiques ont réduit les no-shows de 60%.",
    rating: 5
  },
  {
    name: "Yasmine Belkacem",
    role: "Patiente - Oran",
    content: "Fini les heures d'attente ! Je réserve en ligne et je reçois un SMS quand c'est mon tour. Une véritable révolution.",
    rating: 5
  },
  {
    name: "Clinique El Nour",
    role: "Clinique privée - Constantine",
    content: "La gestion multi-praticiens et la facturation centralisée nous ont fait gagner 3 heures par jour. Indispensable.",
    rating: 5
  }
];

export const pricingPlans = [
  {
    name: "Médecin Solo",
    price: "4 000",
    period: "DA/mois",
    description: "Idéal pour les cabinets individuels",
    features: [
      "Agenda en ligne",
      "Dossier médical numérique",
      "Rappels SMS automatiques",
      "Jusqu'à 200 patients",
      "Support par email",
      "Application mobile"
    ],
    popular: false,
    cta: "Commencer"
  },
  {
    name: "Clinique",
    price: "15 000",
    period: "DA/mois",
    description: "Pour les cliniques multi-praticiens",
    features: [
      "Tout de Médecin Solo",
      "Gestion multi-praticiens",
      "File d'attente digitale",
      "Gestion des stocks",
      "Facturation centralisée",
      "Statistiques avancées",
      "Support prioritaire",
      "Patients illimités"
    ],
    popular: true,
    cta: "Choisir ce plan"
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "",
    description: "Pour les hôpitaux et grands réseaux",
    features: [
      "Tout de Clinique",
      "IA de consultation avancée",
      "Téléconsultation HD",
      "API personnalisée",
      "Hébergement dédié HDS",
      "Formation sur site",
      "Account manager dédié",
      "SLA garanti 99.9%"
    ],
    popular: false,
    cta: "Nous contacter"
  }
];
