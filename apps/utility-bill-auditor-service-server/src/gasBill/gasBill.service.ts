import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GasBillServiceBase } from "./base/gasBill.service.base";

@Injectable()
export class GasBillService extends GasBillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
