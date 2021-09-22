import { Field, ObjectType } from "type-graphql";

import { Article } from "../../entity/Article";

@ObjectType()
export class UpdateResponse {
  @Field()
  ok: Boolean;

  @Field(() => Article)
  article: Article;
}
