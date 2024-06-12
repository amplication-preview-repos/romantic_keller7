export type GasBill = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  provider: string | null;
  updatedAt: Date;
  usage: number | null;
};
