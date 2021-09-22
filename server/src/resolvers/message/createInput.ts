import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateMessageInput {
  @Field()
  text: string;

  @Field(() => ID)
  userId: string;
}
