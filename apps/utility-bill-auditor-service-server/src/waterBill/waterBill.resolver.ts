import * as graphql from "@nestjs/graphql";
import { WaterBillResolverBase } from "./base/waterBill.resolver.base";
import { WaterBill } from "./base/WaterBill";
import { WaterBillService } from "./waterBill.service";

@graphql.Resolver(() => WaterBill)
export class WaterBillResolver extends WaterBillResolverBase {
  constructor(protected readonly service: WaterBillService) {
    super(service);
  }
}
