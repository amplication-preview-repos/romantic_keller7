import { Module } from "@nestjs/common";
import { ElectricBillModuleBase } from "./base/electricBill.module.base";
import { ElectricBillService } from "./electricBill.service";
import { ElectricBillController } from "./electricBill.controller";
import { ElectricBillResolver } from "./electricBill.resolver";

@Module({
  imports: [ElectricBillModuleBase],
  controllers: [ElectricBillController],
  providers: [ElectricBillService, ElectricBillResolver],
  exports: [ElectricBillService],
})
export class ElectricBillModule {}
