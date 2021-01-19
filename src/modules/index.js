import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as user from './user/index.js';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query
    }
  },
  typeDefs
};
