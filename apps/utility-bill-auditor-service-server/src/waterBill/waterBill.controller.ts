import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaterBillService } from "./waterBill.service";
import { WaterBillControllerBase } from "./base/waterBill.controller.base";

@swagger.ApiTags("waterBills")
@common.Controller("waterBills")
export class WaterBillController extends WaterBillControllerBase {
  constructor(protected readonly service: WaterBillService) {
    super(service);
  }
}
