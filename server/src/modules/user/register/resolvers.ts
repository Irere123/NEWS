import { User } from "../../../entity/User";
import * as bcrypt from "bcryptjs";

export default {
  Mutation: {
    register: async (_, { input: { username, password, email } }) => {
      const hashesPassword = await bcrypt.hash(password, 10);

      try {
        const user = await User.create({
          username,
          password: hashesPassword,
          email,
        });

        user.save();
      } catch (err) {
        const { detail } = err;

        if (detail.includes("already exists.")) {
          if (detail.includes("username")) {
            return {
              ok: false,
              errors: [
                {
                  path: "username",
                  message: "username is already taken",
                },
              ],
            };
          } else if (detail.includes("email")) {
            return {
              ok: false,
              errors: [
                {
                  path: "email",
                  message: "email is already in use",
                },
              ],
            };
          }
        }
      }

      return {
        ok: true,
        errors: [],
      };
    },
  },
};
