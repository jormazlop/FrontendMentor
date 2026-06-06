export type Goal = {
  id: string;
  name: string;
  target: number;
  deadline: Date | null;
  createdAt: Date;
  deposits: Deposit[];
};

export type Deposit = {
  id: string;
  amount: number;
  note: string;
  createdAt: Date;
};
