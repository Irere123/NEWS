import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { Article } from "../../entity/Article";
import { User } from "../../entity/User";
import { CreateInput } from "./createInput";
import { CreateResponse } from "./createResponse";
import { UpdateInput } from "./updateInput";
import { UpdateResponse } from "./updateResponse";

@Resolver(Article)
export class ArticleResolver {
  @Query(() => [Article])
  async articles(): Promise<Article[]> {
    return await Article.find();
  }

  @Query(() => Article)
  async article(@Arg("id") id: string): Promise<Article | undefined> {
    return await Article.findOne(id);
  }

  @Query(() => [Article])
  async lastestArticles(): Promise<Article[]> {
    return await Article.find({
      take: 2,
      order: { createdAt: "DESC" },
    });
  }

  @Query(() => [Article])
  async categoryArticles(
    @Arg("category") category: string
  ): Promise<Article[]> {
    return await Article.find({
      where: { category },
      take: 2,
      order: { createdAt: "DESC" },
    });
  }

  @FieldResolver(() => User)
  creator(@Root() article: Article) {
    return User.findOne(article.creatorId);
  }

  @Mutation(() => CreateResponse)
  async createArticle(
    @Arg("input") { category, tag, text, title, creatorId }: CreateInput
  ): Promise<CreateResponse> {
    const article = await Article.create({
      title,
      text,
      category,
      tag,
      creatorId,
    }).save();

    return {
      ok: true,
      article,
    };
  }

  @Mutation(() => UpdateResponse)
  async updateArticle(
    @Arg("input") { articleId, category, tag, text, title }: UpdateInput
  ) {
    const article = await Article.findOne(articleId);

    if (!article) {
      return null;
    }

    await Article.update(
      {
        id: articleId,
      },
      {
        category,
        tag,
        text,
        title,
      }
    );

    return {
      ok: true,
      article,
    };
  }

  @Mutation(() => Boolean)
  async deleteArticle(@Arg("articleId") id: string): Promise<Boolean> {
    await Article.delete({
      id,
    });

    return true;
  }
}
