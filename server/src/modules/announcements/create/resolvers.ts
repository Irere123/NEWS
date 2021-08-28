import { Announcement } from "../../../entity/Announcement";

export default {
  Mutation: {
    createAnnouncement: async (_, { input: { body, userId } }) => {
      try {
        const announcement = await Announcement.create({
          body,
          userId,
        });

        announcement.save();

        return {
          ok: true,
          errors: [],
          announcement,
        };
      } catch (err) {
        console.log(err);
        return {
          ok: false,
          errors: [],
        };
      }
    },
  },
};
