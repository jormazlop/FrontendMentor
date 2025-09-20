export type Autocomplete = {
    results:           AutocompleteResult[];
    generationtime_ms: number;
}

export type AutocompleteResult = {
    id:           number;
    name:         string;
    latitude:     number;
    longitude:    number;
    elevation:    number;
    feature_code: string;
    country_code: string;
    admin1_id:    number;
    admin2_id:    number;
    admin3_id:    number;
    timezone:     string;
    population?:  number;
    country_id:   number;
    country:      string;
    admin1:       string;
    admin2:       string;
    admin3:       string;
    admin4_id?:   number;
    admin4?:      string;
}

export type Detail = {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_units:         Units;
    current:               Current;
    hourly_units:          Units;
    hourly:                Hourly;
    daily_units:           DailyUnits;
    daily:                 Daily;
}

export type Current = {
    time:                 string;
    interval:             number;
    temperature_2m:       number;
    apparent_temperature: number;
    weathercode:          number;
    relative_humidity_2m: number;
    windspeed_10m:        number;
    precipitation:        number;
}

export type Units = {
    time:                 string;
    interval?:            string;
    temperature_2m:       string;
    apparent_temperature: string;
    weathercode:          string;
    relative_humidity_2m: string;
    windspeed_10m:        string;
    precipitation:        string;
}

export type Daily = {
    time:               Date[];
    weathercode:        number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum:  number[];
}

export type DailyUnits = {
    time:               string;
    weathercode:        string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum:  string;
}

export type Hourly = {
    time:                 string[];
    temperature_2m:       number[];
    apparent_temperature: number[];
    relative_humidity_2m: number[];
    windspeed_10m:        number[];
    precipitation:        number[];
    weathercode:          number[];
}
