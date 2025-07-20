export type Data = {
    categories: Categories;
}

export type Categories = {
    Movies:           Categorie[];
    "TV Shows":       Categorie[];
    Countries:        Categorie[];
    "Capital Cities": Categorie[];
    Animals:          Categorie[];
    Sports:           Categorie[];
}

export type Categorie = {
    name:     string;
    selected: boolean;
}
