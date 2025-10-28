export type RecipeT = {
  id: number;
  title: string;
  slug: string;
  image: Image;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
};

export type Image = {
  large: string;
  small: string;
};
