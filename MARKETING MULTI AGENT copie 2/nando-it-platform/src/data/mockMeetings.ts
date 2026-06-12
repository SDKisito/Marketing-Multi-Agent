export interface MockMeeting {
  id: string;
  title: string;
  date: string; // ISO
  durationMin: number;
  participants: string[];
  type: "discovery" | "demo" | "closing" | "client-ops" | "interne";
  summary: string; // résumé pré-existant (issu de Fireflies)
  keyPoints: string[];
  actionItems: string[];
  sentiment: "positive" | "neutral" | "negative";
  transcript: string; // extrait
}

export const MOCK_MEETINGS: MockMeeting[] = [
  {
    id: "call-001",
    title: "Discovery — Julie Lefort (Agence Lefort, immobilier Lyon)",
    date: "2026-04-18T14:00:00+02:00",
    durationMin: 42,
    participants: ["Zeyneb Madi", "Maxim Delavoet", "Julie Lefort"],
    type: "discovery",
    sentiment: "positive",
    summary: "Julie dirige une agence immo Lyon, 45 personnes, CA 8M€. Perd beaucoup de temps sur la qualification de leads entrants (formulaires site + site leboncoin). Budget évoqué : 5-8k€ setup + retainer 1k€/mois. Forte appétence pour Davide. Décision dans 2 semaines, après validation board.",
    keyPoints: [
      "45 négociateurs, 3 juniors en prospection froide",
      "Volume leads : ~180/semaine, 60% non qualifiés aujourd'hui",
      "Ont testé un chatbot basique l'an dernier, mauvaise expérience",
      "Sponsor interne : DSI (Alex Brun), qui valide la stack tech",
      "Timing : décision avant fin mai, go-live souhaité en juillet",
    ],
    actionItems: [
      "Zeyneb : envoyer le pitch deck Davide adapté immobilier (avant vendredi 24/04)",
      "Maxim : produire chiffrage précis avec 3 scénarios (basique / pro / sur-mesure)",
      "Planifier démo live avec DSI Alex Brun — prochain créneau suggéré : 28/04 à 10h",
    ],
    transcript:
      "Julie : 'Ce qui me bloque c'est qu'on reçoit 180 leads par semaine et mes juniors en qualifient à peine 40%. Le reste meurt dans l'inbox.' / Zeyneb : 'Davide peut traiter ça en continu, 24/7, avec qualification sur vos critères.' / Julie : 'Mais si ça se plante et qu'il contacte un prospect avec une info bidon ?' / Zeyneb : 'On a des garde-fous Human-in-the-Loop sur les envois sensibles — il prépare, vous validez en un clic.'",
  },
  {
    id: "call-002",
    title: "Demo — Thomas Vuillemin (VCM Conseil, cabinet B2B)",
    date: "2026-04-16T10:30:00+02:00",
    durationMin: 55,
    participants: ["Zeyneb Madi", "Thomas Vuillemin", "Amélie Cordier (RH VCM)"],
    type: "demo",
    sentiment: "positive",
    summary: "Démo de Sophia (AI Executive Assistant). Thomas intéressé à 80%. Amélie (RH) a porté l'angle formation interne = critique. Besoin de pouvoir onboarder 25 collaborateurs. Budget pas évoqué précisément, mais évoqué une enveloppe annuelle de ~15k€ sur 'tech produktivité'.",
    keyPoints: [
      "25 consultants seniors, 3 associés, 2 assistantes",
      "Douleur principale : triage inbox + prep de dossiers clients avant meetings",
      "Très sensibles à la RGPD (clients publics majoritaires)",
      "Argument n8n auto-hébergé = fort différenciateur pour eux",
      "Amélie veut un plan de formation équipe (workshops + playbooks)",
    ],
    actionItems: [
      "Maxim : envoyer devis avec option formation (2 workshops + playbooks) — deadline 22/04",
      "Zeyneb : confirmer que Sophia peut tourner en n8n self-hosted on-premise",
      "Relancer Thomas si pas de retour avant 28/04",
    ],
    transcript:
      "Thomas : 'Ce qui me plaît c'est le côté transfert de compétences — je ne veux pas qu'on soit dépendant.' / Zeyneb : 'Exactement notre approche Done-With-You : on forme vos équipes.'",
  },
  {
    id: "call-003",
    title: "Call ops — Sacha Navette (Warburg.ai) — bug Davide",
    date: "2026-04-20T11:00:00+02:00",
    durationMin: 28,
    participants: ["Zeyneb Madi", "Sacha Navette"],
    type: "client-ops",
    sentiment: "neutral",
    summary: "Résolution incident Davide du matin : 12 messages envoyés avec template de mars. Root cause : un ancien workflow n8n n'avait pas été désactivé lors du switch v2. Fix déployé pendant le call. Sacha rassuré, mais demande un process de change management plus strict.",
    keyPoints: [
      "12 messages envoyés avec template périmé entre 7h05 et 7h42",
      "Root cause : workflow v1 encore actif en parallèle de v2",
      "Fix : désactivation manuelle + ajout d'une check dans le déploiement",
      "3 prospects ont vu le mauvais message, 1 a répondu négativement",
      "Sacha demande : process de change management + alerting automatique",
    ],
    actionItems: [
      "Zeyneb : documenter le process change management (avant 27/04)",
      "Maxim : préparer un geste commercial (1 mois offert sur le retainer de mai)",
      "Sacha : contacter les 3 prospects impactés pour s'excuser",
    ],
    transcript:
      "Sacha : 'On a eu chaud. Il faut qu'on soit blindé côté déploiement, on a pas le droit à l'erreur sur notre outbound.' / Zeyneb : 'Tu as raison, je documente le process et on met en place un alerting automatique dès cette semaine.'",
  },
  {
    id: "call-004",
    title: "Closing — Samuel Redondo (LeLaboStore, e-commerce)",
    date: "2026-04-14T15:30:00+02:00",
    durationMin: 35,
    participants: ["Maxim Delavoet", "Samuel Redondo"],
    type: "closing",
    sentiment: "positive",
    summary: "Samuel a signé. Projet Maya (AI HR Coordinator) pour gérer le recrutement des 8 postes ouverts. Setup : 6.5k€, retainer 900€/mois. Démarrage semaine du 27/04. Contrat envoyé.",
    keyPoints: [
      "8 postes ouverts (mix logistique, marketing, commercial)",
      "Reçoivent ~50 CV/semaine pendant les pics",
      "Actuellement 1 personne RH qui n'arrive plus à suivre",
      "Validation Samuel + CFO obtenue",
    ],
    actionItems: [
      "Maxim : envoyer le contrat (fait le 14/04 à 18h)",
      "Zeyneb : kick-off technique lundi 27/04 à 10h",
      "Préparer la liste des 8 fiches de poste + données historiques CV",
    ],
    transcript: "Samuel : 'On signe. Quand vous pouvez démarrer ?' / Maxim : 'Kick-off lundi 27 si ça vous va.'",
  },
  {
    id: "call-005",
    title: "1:1 interne — Zeyneb / Maxim (weekly)",
    date: "2026-04-20T09:00:00+02:00",
    durationMin: 30,
    participants: ["Zeyneb Madi", "Maxim Delavoet"],
    type: "interne",
    sentiment: "neutral",
    summary: "Weekly 1:1. Point roadmap, points chauds commerciaux, préparation masterclass. Décision : prioriser la plateforme Nando IT Solutions avant d'accepter de nouveaux clients.",
    keyPoints: [
      "Pipeline en hausse : 3 prospects chauds (Lefort, Vuillemin, + 1 nouveau)",
      "Bug Davide/Warburg = priorité 1 cette semaine",
      "Masterclass le 22/04 — 127 inscrits, objectif 20 leads qualifiés",
      "Décision : pas de nouveau client avant fin avril (focus plateforme)",
    ],
    actionItems: [
      "Zeyneb : fix Davide + documentation process (20/04 fin de journée)",
      "Maxim : préparer les 3 devis (Lefort, Vuillemin, + le nouveau)",
      "Ensemble : review deck masterclass lundi soir",
    ],
    transcript: "",
  },
];

export function renderMeetingsForPrompt(): string {
  return MOCK_MEETINGS.map(
    (m) =>
      `### Call ${m.id} — ${m.title}
- Date : ${m.date} (${m.durationMin} min)
- Type : ${m.type} · Sentiment : ${m.sentiment}
- Participants : ${m.participants.join(", ")}

**Résumé :** ${m.summary}

**Points clés :**
${m.keyPoints.map((k) => `  - ${k}`).join("\n")}

**Action items existants :**
${m.actionItems.map((a) => `  - ${a}`).join("\n")}

**Extrait transcription :** ${m.transcript || "(pas d'extrait disponible)"}`
  ).join("\n\n");
}
