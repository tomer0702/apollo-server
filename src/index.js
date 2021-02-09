import Server from './server.js';
import config from './config/configurations.js';
import schema from './modules/index.js';

const server = new Server(config);
(() => {
  server.bootstrap().setupApollo(schema);
})();
