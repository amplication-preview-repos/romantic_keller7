import { WaterBill as TWaterBill } from "../api/waterBill/WaterBill";

export const WATERBILL_TITLE_FIELD = "provider";

export const WaterBillTitle = (record: TWaterBill): string => {
  return record.provider?.toString() || String(record.id);
};
