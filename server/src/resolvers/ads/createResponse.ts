import { Field, ObjectType } from "type-graphql";

import { Advertisement } from "../../entity/Advertisement";

@ObjectType()
export class CreateAdResponse {
  @Field()
  ok: boolean;

  @Field(() => Advertisement)
  advertisement: Advertisement;
}
