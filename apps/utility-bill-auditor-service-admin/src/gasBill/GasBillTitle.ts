import { GasBill as TGasBill } from "../api/gasBill/GasBill";

export const GASBILL_TITLE_FIELD = "provider";

export const GasBillTitle = (record: TGasBill): string => {
  return record.provider?.toString() || String(record.id);
};
