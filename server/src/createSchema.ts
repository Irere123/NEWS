import { mergeGraphQLSchemas, mergeResolvers } from "@graphql-modules/epoxy";
import { loadResolversFiles, loadSchemaFiles } from "@graphql-modules/sonar";
import { makeExecutableSchema } from "graphql-tools";

export const createSchema = () => {
  return makeExecutableSchema({
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + "/modules/")),
    resolvers: mergeResolvers(loadResolversFiles(__dirname + "/modules/")),
  });
};
