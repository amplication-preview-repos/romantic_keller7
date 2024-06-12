import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ElectricBillService } from "./electricBill.service";
import { ElectricBillControllerBase } from "./base/electricBill.controller.base";

@swagger.ApiTags("electricBills")
@common.Controller("electricBills")
export class ElectricBillController extends ElectricBillControllerBase {
  constructor(protected readonly service: ElectricBillService) {
    super(service);
  }
}
