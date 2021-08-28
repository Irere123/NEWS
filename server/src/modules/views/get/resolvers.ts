import { View } from "../../../entity/Views";

export default {
  Query: {
    countViews: async (_, { storyId }) => {
      const views = await View.count({ where: { storyId } });

      return views;
    },
  },
};
