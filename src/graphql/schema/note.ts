import { gql } from "apollo-server-micro";

export default gql`
  extend type Query {
    getAllNotes: [Note!]
    getNote(_id: ID!): Note!
  }

  extend type Mutation {
    saveNote(title: String!, content: String!): Note!
    deleteNote(_id: ID!): Note!
  }

  type Note {
    _id: ID!
    title: String!
    content: String!
    date: DateTime!
  }
`;
