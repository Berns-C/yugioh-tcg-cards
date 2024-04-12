export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json;charset=UTF-8',
  'Content-Security-Policy': "default-src 'none'",
  'Access-Control-Allow-Origin': '*',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
};

export const API_URL = `${process.env.PROTOCOL}://${process.env.MIDDLEWARE_DOMAIN}/api/${process.env.MIDDLEWARE_VERSION}`;
