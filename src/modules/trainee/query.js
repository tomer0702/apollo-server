import { response } from 'express';
import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const{payload: {skip, limit, sort}}= args;
    const response = await traineeAPI.getTrainees(skip, limit, sort);
    console.log('response',response);
    return response;
  },
  getTrainee:async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response= await userAPI.me();
    return response.data;
  }
  };
