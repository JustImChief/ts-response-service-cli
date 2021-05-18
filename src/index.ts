import getReasonMessage  from 'ts-http-statuses';
import { AxiosResponse } from 'axios';

import { default as ResponseServiceError } from './ResponseServiceError';

class ResponseService<E = ResponseServiceError, R = AxiosResponse> {
  doFailureAction(error: Promise<E>): Promise<E> {
    return error;
  };

  doSuccessAction(response): Promise<R> {
    return response?.data || {};
  };

  processResponse(promise: Promise<AxiosResponse<any>>): Promise<AxiosResponse<any>> {
    return promise
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        throw ResponseServiceError;
      })
      .catch((error) => {
        if (error?.response?.status) {
          return {
            errorType: 'error',
            message:   getReasonMessage(error.response.status),
          };
        }

        return error;
      });
  };
}

export default ResponseService;
export { ResponseServiceError };