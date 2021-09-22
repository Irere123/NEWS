import { Field, ObjectType } from "type-graphql";

import { Message } from "../../entity/Message";

@ObjectType()
export class CreateMessageResponse {
  @Field()
  ok: boolean;

  @Field(() => Message)
  message: Message;
}
