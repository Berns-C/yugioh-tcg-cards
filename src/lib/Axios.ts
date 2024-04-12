import axios from 'axios';

interface IAxios {
  method: string;
  url: string;
  data?: object;
  payload?: object | null;
  headers: object;
}

export const axiosRequest = ({
  headers,
  method,
  url,
  payload = null,
}: IAxios) => {
  const axiosObj: IAxios = {
    method,
    url,
    headers,
  };

  if (payload) {
    axiosObj['data'] = payload;
  }

  return axios(axiosObj);
};
