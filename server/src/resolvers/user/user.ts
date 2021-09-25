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
import { MyContext } from "../../types/MyContext";
import { isAuth } from "../../utils/isAuth";
import { UserResponse } from "./UserResponse";

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
    return `${parent.username}`;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("input") { email, username, password, role }: RegisterInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(password, 12);

    if (password.length < 2) {
      return {
        ok: false,
        errors: [
          {
            field: "password",
            message: "password must be longer than 2",
          },
        ],
      };
    }

    if (!email.includes("@")) {
      return {
        ok: false,
        errors: [
          {
            field: "email",
            message: "you must provide a valid email",
          },
        ],
      };
    }

    let user;

    try {
      const realUser = await User.create({
        username,
        password: hashedPassword,
        email,
        role,
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

    // @ts-ignore
    req.session!.userId = user.id;

    return {
      ok: true,
      user,
    };
  }

  @Mutation(() => UserResponse, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return {
        ok: false,
        errors: [
          {
            field: "username",
            message: "Invalid login",
          },
        ],
      };
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return {
        ok: false,
        errors: [
          {
            field: "password",
            message: "your password is incorrect",
          },
        ],
      };
    }

    // @ts-ignore
    ctx.req.session!.userId = user.id;

    return { ok: true, user };
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
