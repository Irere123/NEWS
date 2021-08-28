import { User } from "../../../entity/User";

export default {
  Query: {
    me: async (_, __, { req }) => {
      const user = await User.findOne(req.userId);

      return user;
    },
    allUsers: () => User.find(),
  },
};
