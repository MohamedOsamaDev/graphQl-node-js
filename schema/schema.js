import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: (parent, args) => {
        return "Hello World!";
      },
    },
  }),
});

export const schema = new GraphQLSchema({
  query: rootQuery,
});
