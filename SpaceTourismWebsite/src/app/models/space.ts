export type Data = {
  destinations: Destination[];
  crew:         Crew[];
  technology:   Technology[];
}

export type Crew = {
  name:   string;
  images: CrewImages;
  role:   string;
  bio:    string;
}

export type CrewImages = {
  png:  string;
  webp: string;
}

export type Destination = {
  name:        string;
  images:      CrewImages;
  description: string;
  distance:    string;
  travel:      string;
}

export type Technology = {
  name:        string;
  images:      TechnologyImages;
  description: string;
}

export type TechnologyImages = {
  portrait:  string;
  landscape: string;
}
