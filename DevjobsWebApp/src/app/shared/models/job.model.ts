export type JobModel = {
  id: number;
  company: string;
  logo: LogoModel;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: ContractModel;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: RequirementsModel;
  role: RequirementsModel;
};

export type LogoModel =
  | 'blogr'
  | 'coffeeroasters'
  | 'creative'
  | 'crowdfund'
  | 'maker'
  | 'mastercraft'
  | 'officelite'
  | 'pod'
  | 'pomodoro'
  | 'scoot'
  | 'typemaster'
  | 'vector';

export enum ContractModel {
  Freelance = 'Freelance',
  FullTime = 'Full Time',
  PartTime = 'Part Time',
}

export type RequirementsModel = {
  content: string;
  items: string[];
};

export interface SearchData {
  company: string;
  location: string;
  full: boolean;
}
