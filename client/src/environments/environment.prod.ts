const PROTOCOL: 'http' | 'https' = 'http';

const HOST: string = 'localhost';
const PORT: string = ':5000';

export const environment = {
  production: false,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,
};
