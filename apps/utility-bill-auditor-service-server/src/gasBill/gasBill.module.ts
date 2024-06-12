import { Module } from "@nestjs/common";
import { GasBillModuleBase } from "./base/gasBill.module.base";
import { GasBillService } from "./gasBill.service";
import { GasBillController } from "./gasBill.controller";
import { GasBillResolver } from "./gasBill.resolver";

@Module({
  imports: [GasBillModuleBase],
  controllers: [GasBillController],
  providers: [GasBillService, GasBillResolver],
  exports: [GasBillService],
})
export class GasBillModule {}
