export type Planet = {
  name:        string;
  overview:    Geology;
  structure:   Geology;
  geology:     Geology;
  rotation:    string;
  revolution:  string;
  radius:      string;
  temperature: string;
  images:      Images;
}

export type Geology = {
  content: string;
  source:  string;
}

export type Images = {
  planet:   string;
  internal: string;
  geology:  string;
}
