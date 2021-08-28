import { Story } from "../../../entity/Story";

export default {
  Mutation: {
    createStory: async (
      _,
      { story: { text, title, category, tag, authorId } }
    ) => {
      const story = await Story.create({
        text,
        title,
        category,
        tag,
        author: authorId,
      });

      story.save();
      return {
        ok: true,
        errors: [],
        story,
      };
    },
  },
};
