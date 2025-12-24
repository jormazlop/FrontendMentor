export type FlashcardModel = {
  id: string;
  question: string;
  answer: string;
  category: string;
  knownCount: number;
};

export type CategoryModel = {
  category: string;
  total: number;
}

export type FormModel = {
  question: string;
  answer: string;
  category: string;
};