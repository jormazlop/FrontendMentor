export type Currency = {
  iso_code: string;
  iso_numeric: string;
  name: string;
  symbol: string;
  start_date: Date;
  end_date: Date;
};

export type Provider = {
  key: string;
  name: string;
  country_code: string;
  rate_type: null | string;
  pivot_currency: string;
  data_url: string;
  terms_url: null | string;
  start_date: Date;
  end_date: Date;
  publish_cadence: PublishCadence | null;
  publishes_missed: number | null;
  currencies: string[];
};

export enum PublishCadence {
  Daily = 'daily',
  Monthly = 'monthly',
  Weekly = 'weekly',
}

export type CurrencyOption = {
  country_code: string;
  iso_code: string;
  name: string;
};

export type Rate = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};


export type LiveMarketRate = {
  base: string;
  quote: string;
  todayRate: number;
  changeRate: number;
}

export type NavMenu = {
  route: string;
  badge?: number;
}

export class RateHistory {
  open: number;
  last: number;
  change: number;
  percentageChange: number;

  constructor() {
    this.open = 0;
    this.last = 0;
    this.change = 0;
    this.percentageChange = 0;
  }


}
