export type Word = {
  word:      string;
  phonetic:  string;
  phonetics: Phonetic[];
  origin:    string;
  meanings:  Meaning[];
  sourceUrls: string[];
}

export type Meaning = {
  partOfSpeech: string;
  definitions:  Definition[];
  synonyms:   any[];
  antonyms:   any[];
}

export type Definition = {
  definition: string;
  example:    string;
  synonyms:   any[];
  antonyms:   any[];
}

export type Phonetic = {
  text:   string;
  audio?: string;
}
