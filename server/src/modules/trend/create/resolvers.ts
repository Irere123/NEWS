import { Trend } from "../../../entity/Trend";

export default {
  Mutation: {
    createTrend: async (_, { input: { trend, sourceName, sourceUrl } }) => {
      try {
        await Trend.create({
          trend,
          sourceName,
          sourceUrl,
        }).save();
      } catch (err) {
        console.log(err);
      }
      return {
        ok: true,
        errors: [],
      };
    },
  },
};
