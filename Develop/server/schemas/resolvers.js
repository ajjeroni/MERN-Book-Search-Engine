const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      
    },
  },
  Mutation: {
    login: async (parent, args) => {
      
    },
    addUser: async (parent, { _id, techNum }) => {
      
    },
    saveBook: async (parent, { _id, techNum }) => {
      
    },
    removeBook: async (parent, { _id, techNum }) => {
      
    },
  },
};

module.exports = resolvers;
