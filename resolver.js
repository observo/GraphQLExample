// resolvers.js

const resolvers = {
  Student: {
    async hobbies(hobbies) {
     return hobbies.getHobbies()
  }
  },

  Hobbies: {
   async student(student) {
    return student.getStudent()
  }
  },
  Query: {
     async getStudent (root, { id }, { models }) {
      return models.Student.findByPk(id)
    },
     async getAllStudents (root, args, { models }){
      return models.Student.findAll()
    },
     async getHobbies (root, { id }, { models }) {
      return models.Hobbies.findByPk(id)
    }
  
  },
  
  Mutation: {
  
    async createStudent (root, { name, email }, { models }) {
      return await models.Student.create({
        name,
        email
      })
  
    },
  
    async createHobby (root, { student_id, title }, { models }) {
      return await models.Hobby.create({ studentId, title })
    }
  }
}