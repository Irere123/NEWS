import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import bcrypt from "bcryptjs";

import { User } from "../../entity/User";
import { RegisterInput } from "./RegisterInput";
import { RegisterResponse } from "./RegisterResponse";
import { MyContext } from "../../types/MyContext";
import { isAuth } from "../../utils/isAuth";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  @UseMiddleware(isAuth)
  allUsers(): Promise<User[]> {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    // @ts-ignore
    if (!ctx.req.session!.userId) {
      return undefined;
    }

    // @ts-ignore
    return await User.findOne(ctx.req.session!.userId);
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Arg("input") { firstName, email, lastName, password, role }: RegisterInput
  ): Promise<RegisterResponse> {
    const hashedPassword = await bcrypt.hash(password, 12);

    let user;

    try {
      const realUser = await User.create({
        firstName,
        lastName,
        password: hashedPassword,
        email,
        role
      }).save();

      user = realUser;
    } catch (err) {
      const { detail } = err;

      if (detail.includes("email")) {
        if (detail.includes("already exists.")) {
          return {
            ok: false,
            errors: [
              {
                field: "email",
                message: "email already taken",
              },
            ],
          };
        }
      }
    }

    return {
      ok: true,
      user,
    };
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return null;
    }

    // @ts-ignore
    ctx.req.session!.userId = user.id;

    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session.destroy((error) => {
        if (error) {
          console.log(error);
          return rej(false);
        }

        ctx.res.clearCookie("_qid");
        return res(true);
      })
    );
  }
}
