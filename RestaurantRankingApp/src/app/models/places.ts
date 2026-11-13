export type Response = {
    meta:        Meta;
    places:      Place[];
    comparisons: Comparison[];
}

export type Comparison = {
    aId:    string;
    bId:    string;
    result: Result;
    date:   Date;
}

export enum Result {
    A = "a",
    B = "b",
    Tie = "tie",
}

export type Meta = {
    city:          string;
    center:        Center;
    defaultZoom:   number;
    generatedFor:  string;
    priceLevels:   { [key: string]: string };
    cuisineGroups: string[];
}

export type Center = {
    lat: number;
    lng: number;
}

export type Place = {
    id:           string;
    position:   number;
    name:         string;
    cuisine:      string;
    cuisineGroup: string;
    specialty:    string;
    area:         string;
    address:      string;
    lat:          number;
    lng:          number;
    priceLevel:   number;
    status:       Status;
    rank:         number | null;
    visits:       number;
    tags:         string[];
    note:         string;
    photo:        null;
    website:      null | string;
    dateAdded:    Date;
}

export enum Status {
    Ranked = "ranked",
    Want = "want",
}
