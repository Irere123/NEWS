import { User } from "../../../entity/User";
import { Announcement } from "../../../entity/Announcement";

export default {
  Announcement: {
    user: async ({ userId }) => {
      return await User.findOne({ where: { id: userId } });
    },
  },
  Query: {
    getAllAnnouncements: async () => {
      const announcements = await Announcement.find({
        order: { createdAt: "DESC" },
      });

      return announcements;
    },
  },
};
