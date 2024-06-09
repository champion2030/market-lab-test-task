import { mongoDbConfig } from '../config';

export default (): string => {
  const userCredentials = `${mongoDbConfig.username}:${mongoDbConfig.password}@`;
  const mongoHosts = `${mongoDbConfig.host
    .split(',')
    .map((host: string) => `${host}:${mongoDbConfig.port}`)
    .join(',')}/`;
  return `mongodb://${userCredentials}${mongoHosts}${mongoDbConfig.database}?authSource=admin`;
};
