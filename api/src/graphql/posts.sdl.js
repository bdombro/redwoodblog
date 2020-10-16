export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    author: User!
    authorId: Int!
    title: String!
    body: String!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    authorId: Int!
    title: String!
    body: String!
  }

  input UpdatePostInput {
    authorId: Int
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
