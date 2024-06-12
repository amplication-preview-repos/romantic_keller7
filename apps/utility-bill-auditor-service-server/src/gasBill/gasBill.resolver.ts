import * as graphql from "@nestjs/graphql";
import { GasBillResolverBase } from "./base/gasBill.resolver.base";
import { GasBill } from "./base/GasBill";
import { GasBillService } from "./gasBill.service";

@graphql.Resolver(() => GasBill)
export class GasBillResolver extends GasBillResolverBase {
  constructor(protected readonly service: GasBillService) {
    super(service);
  }
}
