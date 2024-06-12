import { SortOrder } from "../../util/SortOrder";

export type GasBillOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  updatedAt?: SortOrder;
  usage?: SortOrder;
};
