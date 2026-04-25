// Arbre généalogique — structure de démonstration
// À remplacer par les données réelles au fur et à mesure des recherches
// RÈGLE D'OR : ne jamais relier deux Porcu sans acte probant

export interface Personne {
  id: string;
  prenom: string;
  nom: string;
  naissance?: { annee?: string; lieu?: string };
  deces?: { annee?: string; lieu?: string };
  conjoint?: string;
  enfants?: string[];
  notes?: string;
  source?: string;
  verifie?: boolean;
}

export const arbre: Personne[] = [
  {
    id: 'g0-1',
    prenom: '[Prénom]',
    nom: 'Porcu',
    naissance: { annee: 'c. 1850', lieu: 'Villaputzu (?)' },
    deces: { annee: '?', lieu: 'Sardaigne' },
    enfants: ['g1-1'],
    notes: "Génération la plus ancienne documentée dans l'arbre provisoire. Acte à retrouver dans les registres d'Antenati.",
    verifie: false,
  },
  {
    id: 'g1-1',
    prenom: '[Prénom]',
    nom: 'Porcu',
    naissance: { annee: 'c. 1890', lieu: 'Sardaigne' },
    enfants: ['g2-1'],
    notes: "Génération charnière entre la Sardaigne d'origine et l'émigration du XXᵉ siècle.",
    verifie: false,
  },
  {
    id: 'g2-1',
    prenom: '[Prénom]',
    nom: 'Porcu',
    naissance: { annee: 'c. 1925', lieu: 'Sardaigne' },
    enfants: ['g3-1'],
    notes: "Génération de l'émigration vers la Lorraine dans les années 1950.",
    source: 'Livret de famille à fournir',
    verifie: false,
  },
  {
    id: 'g3-1',
    prenom: '[Prénom]',
    nom: 'Porcu',
    naissance: { annee: 'c. 1955', lieu: 'Bousbach / Forbach' },
    notes: "Génération née en France, seconde génération de l'immigration lorraine.",
    verifie: false,
  },
];
