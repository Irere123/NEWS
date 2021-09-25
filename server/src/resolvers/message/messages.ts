import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  // Subscription,
} from "type-graphql";

import { Message } from "../../entity/Message";
import { User } from "../../entity/User";
import { CreateMessageInput } from "./createInput";
import { CreateMessageResponse } from "./createResponse";

@Resolver(Message)
export class MessagesResolver {
  @Query(() => [Message])
  async messages(): Promise<Message[]> {
    return await Message.find();
  }

  @FieldResolver(() => User)
  user(@Root() message: Message) {
    return User.findOne(message.userId);
  }

  @Mutation(() => CreateMessageResponse)
  async createMessage(
    @Arg("input") { text, userId }: CreateMessageInput
  ): Promise<CreateMessageResponse> {
    const message = await Message.create({
      text,
      userId,
    }).save();

    return {
      ok: true,
      message,
    };
  }
}
