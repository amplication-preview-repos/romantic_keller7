import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GasBillService } from "./gasBill.service";
import { GasBillControllerBase } from "./base/gasBill.controller.base";

@swagger.ApiTags("gasBills")
@common.Controller("gasBills")
export class GasBillController extends GasBillControllerBase {
  constructor(protected readonly service: GasBillService) {
    super(service);
  }
}
