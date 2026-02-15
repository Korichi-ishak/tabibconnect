# TabibConnect — Prototype HealthTech

Bienvenue dans le prototype complet de **TabibConnect**.

## 🚀 Comment lancer le projet

Ce projet est divisé en deux parties : le frontend (React) et le backend (Node.js).
Vous devez lancer les deux terminaux séparément.

### 1. Lancer le Frontend (Site Web)
Ouvrez un terminal et exécutez :
```bash
cd client
npm install  # Si première fois
npm run dev
```
> Le site sera accessible sur : **http://localhost:5173**

### 2. Lancer le Backend (API)
Ouvrez un **deuxième** terminal et exécutez :
```bash
cd server
npm install  # Si première fois
npm run dev
```
> L'API sera accessible sur : **http://localhost:3001**

## 🌐 Liens de production (Live)

- **Frontend (Vercel)** : *Votre lien Vercel*
- **Backend (Render)** : [https://tabibconnect-api.onrender.com](https://tabibconnect-api.onrender.com)


## 📂 Structure

- **client/** : Code source React (Pages, Composants, Styles)
- **server/** : API Express (Données mock, Routes)

## 🔑 Comptes de démo

Vous pouvez utiliser n'importe quel email/mot de passe, ou utiliser les boutons de remplissage automatique si disponibles.

- **Patient** : Accès au dashboard patient, prise de RDV
- **Médecin** : Accès au calendrier, gestion patients
- **Clinique** : Vue d'ensemble, stocks, facturation
- **Pharmacien** : Validation des ordonnances
