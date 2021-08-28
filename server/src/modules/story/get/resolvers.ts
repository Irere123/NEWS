import { User } from "../../../entity/User";
import { Story } from "../../../entity/Story";

export default {
  Story: {
    author: async ({ authorId }) => {
      const user = await User.findOne(authorId);

      if (user) {
        return user;
      }

      return {
        id: "",
        email: "",
        password: "",
        username: "",
      };
    },
  },
  Query: {
    latestStories: async () => {
      const latest = await Story.find({
        order: { createdAt: "DESC" },
        take: 2,
      });

      return latest;
    },
    allStories: async () => {
      const stories = await Story.find({ order: { createdAt: "DESC" } });
      return stories;
    },
    getStory: async (_, { storyId }) => {
      const story = await Story.findOne(storyId);

      return story;
    },
  },
};
