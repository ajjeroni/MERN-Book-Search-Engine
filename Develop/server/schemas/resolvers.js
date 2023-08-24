const { User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // context.user._id
    },
  },
  Mutation: {
    login: async (parent, {email, password}) => {
      // const user = await User.findOne {{}}
      // const correctPw = await user.isCorrectPassword(password);
      // return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        return
      } 
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
      // context.user._id
       
    },
    removeBook: async (parent, args, context) => {
      
    },
  },
}

module.exports = resolvers;
