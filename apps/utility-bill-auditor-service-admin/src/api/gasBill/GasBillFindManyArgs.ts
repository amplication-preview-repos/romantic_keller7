import { GasBillWhereInput } from "./GasBillWhereInput";
import { GasBillOrderByInput } from "./GasBillOrderByInput";

export type GasBillFindManyArgs = {
  where?: GasBillWhereInput;
  orderBy?: Array<GasBillOrderByInput>;
  skip?: number;
  take?: number;
};
