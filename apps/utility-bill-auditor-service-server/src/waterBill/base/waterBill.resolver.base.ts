/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WaterBill } from "./WaterBill";
import { WaterBillCountArgs } from "./WaterBillCountArgs";
import { WaterBillFindManyArgs } from "./WaterBillFindManyArgs";
import { WaterBillFindUniqueArgs } from "./WaterBillFindUniqueArgs";
import { CreateWaterBillArgs } from "./CreateWaterBillArgs";
import { UpdateWaterBillArgs } from "./UpdateWaterBillArgs";
import { DeleteWaterBillArgs } from "./DeleteWaterBillArgs";
import { WaterBillService } from "../waterBill.service";
@graphql.Resolver(() => WaterBill)
export class WaterBillResolverBase {
  constructor(protected readonly service: WaterBillService) {}

  async _waterBillsMeta(
    @graphql.Args() args: WaterBillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WaterBill])
  async waterBills(
    @graphql.Args() args: WaterBillFindManyArgs
  ): Promise<WaterBill[]> {
    return this.service.waterBills(args);
  }

  @graphql.Query(() => WaterBill, { nullable: true })
  async waterBill(
    @graphql.Args() args: WaterBillFindUniqueArgs
  ): Promise<WaterBill | null> {
    const result = await this.service.waterBill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WaterBill)
  async createWaterBill(
    @graphql.Args() args: CreateWaterBillArgs
  ): Promise<WaterBill> {
    return await this.service.createWaterBill({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => WaterBill)
  async updateWaterBill(
    @graphql.Args() args: UpdateWaterBillArgs
  ): Promise<WaterBill | null> {
    try {
      return await this.service.updateWaterBill({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WaterBill)
  async deleteWaterBill(
    @graphql.Args() args: DeleteWaterBillArgs
  ): Promise<WaterBill | null> {
    try {
      return await this.service.deleteWaterBill(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
