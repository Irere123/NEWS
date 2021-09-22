import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateInput {
  @Field()
  text: string;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field()
  tag: string;

  @Field(() => ID)
  creatorId: string;
}
