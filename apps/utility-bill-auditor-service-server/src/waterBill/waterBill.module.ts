import { Module } from "@nestjs/common";
import { WaterBillModuleBase } from "./base/waterBill.module.base";
import { WaterBillService } from "./waterBill.service";
import { WaterBillController } from "./waterBill.controller";
import { WaterBillResolver } from "./waterBill.resolver";

@Module({
  imports: [WaterBillModuleBase],
  controllers: [WaterBillController],
  providers: [WaterBillService, WaterBillResolver],
  exports: [WaterBillService],
})
export class WaterBillModule {}
