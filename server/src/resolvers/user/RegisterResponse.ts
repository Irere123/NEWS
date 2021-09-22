import { Field, ObjectType } from "type-graphql";

import { User } from "../../entity/User";

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  ok?: boolean;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
