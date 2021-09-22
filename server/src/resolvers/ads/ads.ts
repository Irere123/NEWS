import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Advertisement } from "../../entity/Advertisement";
import { CreateAdInput } from "./createInput";
import { CreateAdResponse } from "./createResponse";

@Resolver(Advertisement)
export class AdsResolver {
  @Query(() => [Advertisement])
  async advertisements(@Arg("limit") limit: number): Promise<Advertisement[]> {
    const ads = await Advertisement.find({
      where: { expired: false },
      take: limit,
      order: { paidAmount: "DESC" },
    });

    return ads;
  }

  @Query(() => [Advertisement])
  async hightestPaidAds(): Promise<Advertisement[]> {
    const ads = await Advertisement.find({
      where: { expired: false },
      take: 3,
      order: { paidAmount: "DESC" },
    });

    return ads;
  }

  @Mutation(() => CreateAdResponse)
  async createAdvertisement(
    @Arg("input")
    { advertiser, image, link, paidAmount, text, title }: CreateAdInput
  ): Promise<CreateAdResponse> {
    const advertisement = await Advertisement.create({
      advertiser,
      image,
      link,
      paidAmount,
      text,
      title,
    }).save();

    return {
      ok: true,
      advertisement,
    };
  }

  @Mutation(() => Boolean)
  async updateAd(
    @Arg("expired") expired: boolean,
    @Arg("id") id: string
  ): Promise<Boolean | undefined | null> {
    const advertisement = await Advertisement.findOne(id);

    if (!advertisement) {
      return null;
    }

    await Advertisement.update(
      {
        id,
      },
      {
        expired,
      }
    );

    return true;
  }
}
