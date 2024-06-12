import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElectricBillServiceBase } from "./base/electricBill.service.base";

@Injectable()
export class ElectricBillService extends ElectricBillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
