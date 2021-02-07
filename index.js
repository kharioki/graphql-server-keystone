const { ApolloServer, gql } = require('apollo-server');

const schema = gql`
  type User {
    id: ID!
    name: String
  }

  type Page {
    id: ID!
    title: String
    author: User
    content: String
  }

  type Query {
    Page(id: ID!): Page
    User(id: ID!): User
  }
`;

const users = [
    {
        id: '1',
        name: 'Tony',
    },
];

const pages = [
    {
        id: '1',
        name: 'Hello World',
        author: users[0],
        content: 'Lorem ipsum...',
    },
];

const resolvers = {
    Query: {
      Page: (_, args) => {
        return pages.find(page => page.id === args.id);
      },
      User: (_, args) => {
        return users.find(user => user.id === args.id);
      },
    },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL server started at: ${url}`);
});