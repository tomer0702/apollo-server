import { response } from 'express';
import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    console.log('response',response);
    return response.data.records;
  },
  getTrainee: (parent, args, context) => {
    const { id } = args;
    return user.getUser(id);
  }
  };
