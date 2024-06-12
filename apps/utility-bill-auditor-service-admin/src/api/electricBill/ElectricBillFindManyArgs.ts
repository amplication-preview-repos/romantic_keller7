import { ElectricBillWhereInput } from "./ElectricBillWhereInput";
import { ElectricBillOrderByInput } from "./ElectricBillOrderByInput";

export type ElectricBillFindManyArgs = {
  where?: ElectricBillWhereInput;
  orderBy?: Array<ElectricBillOrderByInput>;
  skip?: number;
  take?: number;
};
