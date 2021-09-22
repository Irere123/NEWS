import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAdInput {
  @Field()
  text: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  link: string;

  @Field()
  advertiser: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field()
  paidAmount: number;
}
