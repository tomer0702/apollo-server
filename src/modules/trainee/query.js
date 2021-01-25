import { response } from 'express';
import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    console.log('response',response);
    return response.data.records;
  },
  getTrainee:async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response= await userAPI.me();
    return response.data;
  }
  };
