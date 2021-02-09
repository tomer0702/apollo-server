export default {
    loginUser: async (parent, args, context) => {
      console.log('inside apollo ');
      const { payload: { email, password } } = args;
      const { dataSources: { userAPI } } = context;
      const response = await userAPI.loginUser({ email, password });
      return response.data;
    }
  };
  