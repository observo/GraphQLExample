const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Student {
id: Int!
name: String!
email: String!
hobbies: [Hobby]
}

type Hobby {
id: Int!
title: String!
student: Student!
}

type Query {
getStudent(id: Int!): Student
getAllStudents: [Student]
getHobbies(id: Int!): Hobby

}

type Mutation {

createStudent(name: String!, email: String!): Student!
 createHobby( student_id: Int!, title: String!): Hobby!

}`

module.exports = typeDefs