import { getConnection } from "typeorm";
import { User } from "../../../entity/User";
import * as bcrypt from "bcryptjs";
import { createTokens } from "../../../auth";

const invalidLoginResponse = {
  errors: [
    {
      path: "password",
      message: "Invalid login",
    },
  ],
  user: null,
};

export const resolvers = {
  login: async (_, { input }, { res }) => {
    const user = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.username = :username", {
        username: input.usernameOrEmail,
      })
      .orWhere("user.email = :email", { email: input.usernameOrEmail })
      .getOne();

    if (!user) {
      return invalidLoginResponse;
    }

    const valid = await bcrypt.compare(input.password, user.password);

    if (!valid) {
      return invalidLoginResponse;
    }

    const { refreshToken, accessToken } = createTokens(user);

    res.cookie("refresh-token", refreshToken);
    res.cookie("access-token", accessToken);

    return {
      errors: [],
      user: null,
    };
  },
};

export default {
  Mutation: {
    ...resolvers,
  },
};
