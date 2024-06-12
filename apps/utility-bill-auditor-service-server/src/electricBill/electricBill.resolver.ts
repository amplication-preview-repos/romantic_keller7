import * as graphql from "@nestjs/graphql";
import { ElectricBillResolverBase } from "./base/electricBill.resolver.base";
import { ElectricBill } from "./base/ElectricBill";
import { ElectricBillService } from "./electricBill.service";

@graphql.Resolver(() => ElectricBill)
export class ElectricBillResolver extends ElectricBillResolverBase {
  constructor(protected readonly service: ElectricBillService) {
    super(service);
  }
}
