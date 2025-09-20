enum WeatherCode {
  Sunny = 'sunny',
  Storm = 'storm',
  Snow = 'snow',
  Rain = 'rain',
  Cloudy = 'cloudy',
  Overcast = 'overcast',
  Fog = 'fog',
  Drizzle = 'drizzle',
}

export const weatherCode: { [key in WeatherCode]: number[] } = {
  [WeatherCode.Sunny]: [0],
  [WeatherCode.Storm]: [95, 96, 99],
  [WeatherCode.Snow]: [71, 73, 75, 77],
  [WeatherCode.Rain]: [61, 63, 65, 66, 67],
  [WeatherCode.Cloudy]: [1, 2, 3],
  [WeatherCode.Overcast]: [80, 81, 82, 85, 86],
  [WeatherCode.Fog]: [45, 48],
  [WeatherCode.Drizzle]: [51, 53, 55, 56, 57],
};

export function getWeatherCodeFromNumber(num: number): WeatherCode | null {
  for (const key in weatherCode) {
    if (weatherCode[key as WeatherCode].includes(num)) {
      return key as WeatherCode;
    }
  }
  return null; // Si no se encuentra el número
}
