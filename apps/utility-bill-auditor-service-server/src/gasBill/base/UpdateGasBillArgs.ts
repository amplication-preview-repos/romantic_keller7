/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GasBillWhereUniqueInput } from "./GasBillWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GasBillUpdateInput } from "./GasBillUpdateInput";

@ArgsType()
class UpdateGasBillArgs {
  @ApiProperty({
    required: true,
    type: () => GasBillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GasBillWhereUniqueInput)
  @Field(() => GasBillWhereUniqueInput, { nullable: false })
  where!: GasBillWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GasBillUpdateInput,
  })
  @ValidateNested()
  @Type(() => GasBillUpdateInput)
  @Field(() => GasBillUpdateInput, { nullable: false })
  data!: GasBillUpdateInput;
}

export { UpdateGasBillArgs as UpdateGasBillArgs };
