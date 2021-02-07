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