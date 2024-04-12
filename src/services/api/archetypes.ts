import { headers } from '@Data/services';
import { axiosRequest } from '@Library/Axios';

export const fetchArchetypes = (url) => {
  return axiosRequest({ headers, method: 'GET', url });
};
