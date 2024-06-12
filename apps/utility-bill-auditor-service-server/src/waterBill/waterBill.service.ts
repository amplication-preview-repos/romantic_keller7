import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterBillServiceBase } from "./base/waterBill.service.base";

@Injectable()
export class WaterBillService extends WaterBillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
