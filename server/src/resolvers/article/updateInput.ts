import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UpdateInput {
  @Field(() => ID)
  articleId: string;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  category: string;

  @Field()
  tag: string;
}
