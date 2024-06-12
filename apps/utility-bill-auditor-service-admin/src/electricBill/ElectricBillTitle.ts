import { ElectricBill as TElectricBill } from "../api/electricBill/ElectricBill";

export const ELECTRICBILL_TITLE_FIELD = "provider";

export const ElectricBillTitle = (record: TElectricBill): string => {
  return record.provider?.toString() || String(record.id);
};
