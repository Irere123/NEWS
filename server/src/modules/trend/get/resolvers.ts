import { Trend } from "../../../entity/Trend";

export default {
  Query: {
    getTrends: async () => {
      const trends = await Trend.find();

      return trends;
    },
  },
};
