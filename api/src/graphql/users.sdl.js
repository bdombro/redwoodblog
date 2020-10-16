export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    name: String
    posts: [Post]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    userByEmail(email: String!): User
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input UpdateUserInput {
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
