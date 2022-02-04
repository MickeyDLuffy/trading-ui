import {IEnvironment} from "./ienvironment";
const apiRoot = 'http://localhost:8080/api/v1';
const mainApiUrl = `${apiRoot}`;
export const environment: IEnvironment  = {
  baseUri: mainApiUrl,
  enableDebugTools: false,
  logLevel: 'debug',
  production: true
};
