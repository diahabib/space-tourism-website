export interface Images {
  png: string;
  webp: string;
}

export interface DestinationData {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewData {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}

export interface TechnologyData {
  name: string;
  images: TechnologyImages;
  description: string;
}
