import { Configuration, NODE_ENV, SERVICE_TYPE } from './types';

export const CONFIGURATIONS: Configuration = {
  SERVICE_TYPE:
    (process.env.SERVICE_TYPE as SERVICE_TYPE) || SERVICE_TYPE.GATEWAY,
  NODE_ENV: (process.env.NODE_ENV as NODE_ENV) || NODE_ENV.DEVELOPMENT,
};
