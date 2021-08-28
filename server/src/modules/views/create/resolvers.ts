import { View } from "../../../entity/Views";
import { Story } from "../../../entity/Story";

export default {
  Mutation: {
    createView: async (
      _,
      { input: { storyId, longitude, latitude, tag, category } }
    ) => {
      try {
        const story = await Story.findOne({ where: { id: storyId } });
        if (story) {
          await View.create({
            storyId,
            longitude,
            latitude,
            tag,
            category,
          }).save();
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }

      return true;
    },
  },
};
