import pubsub from '../pubsub.js';
import userInstance from '../../service/user.js';
import constant from '../../lib/constant.js'

export default {
  createTrainee: async (parent, args, context) => {
    const { user } = args;
    console.log("user", user);
    const { dataSources: { traineeAPI } } = context;
    const createRecord = await traineeAPI.createTrainee({...user});
    console.log("create data", createRecord);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: createRecord.data });
    return createRecord.data;
  },
  updateTrainee: async (parent, args, context) => {
    const { User } = args;
    const dataToUpdate={...User };
    console.log("in a update function",{dataToUpdate});
    const { dataSources: { traineeAPI } } = context;
    const updateRecord = await traineeAPI.updateTrainee({ dataToUpdate });
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateRecord.data });
    return updateRecord.data;
  },
  deleteTrainee: async (parent, args, context) => {
    const { id } = args;
    console.log("inside delete function id",id);
    const { dataSources: { traineeAPI } } = context;
    const deleteRecord =  await traineeAPI.deleteTrainee(id);
    console.log("delete data",deleteRecord);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteRecord.data });
    return deleteRecord.message;
  }

}
