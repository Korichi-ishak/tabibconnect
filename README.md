# TabibConnect — prototype de plateforme santé

Prototype cliquable d'une plateforme médicale pour l'Algérie, avec un espace pour chaque acteur : patient, médecin, clinique et pharmacien. Les données sont fictives : le but est de montrer tous les parcours de bout en bout.

## Les quatre espaces

| Espace | Ce qu'on y fait |
|---|---|
| **Patient** | Chercher un médecin, prendre et suivre ses rendez-vous, consulter son dossier médical et ses ordonnances |
| **Médecin** | Tableau de bord, agenda, liste des patients, consultation, téléconsultation, assistant IA |
| **Clinique** | File d'attente, praticiens, stock, facturation |
| **Pharmacien** | Ordonnances reçues |

On trouve aussi une page d'accueil publique, une connexion et une inscription.

## Stack

- **Client** : React · Vite · React Router · Lucide
- **API** : Node.js · Express (données de démonstration : médecins, statistiques)

## Lancer en local

Deux terminaux :

```bash
# API — http://localhost:3001
cd server
npm install
npm run dev
```

```bash
# Interface
cd client
npm install
npm run dev
```

## Structure

```
client/src/pages/patient/      espace patient
client/src/pages/doctor/       espace médecin
client/src/pages/clinic/       espace clinique
client/src/pages/pharmacist/   espace pharmacien
client/src/data/mockData.js    données fictives
server/server.js               API de démonstration
```

## État

Prototype de démonstration : pas de base de données ni d'authentification réelle.

---

Réalisé par **Ishak Korichi** · [korichi-ishak.vercel.app](https://korichi-ishak.vercel.app)
