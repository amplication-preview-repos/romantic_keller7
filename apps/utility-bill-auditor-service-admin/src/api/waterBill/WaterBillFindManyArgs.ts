import { WaterBillWhereInput } from "./WaterBillWhereInput";
import { WaterBillOrderByInput } from "./WaterBillOrderByInput";

export type WaterBillFindManyArgs = {
  where?: WaterBillWhereInput;
  orderBy?: Array<WaterBillOrderByInput>;
  skip?: number;
  take?: number;
};
