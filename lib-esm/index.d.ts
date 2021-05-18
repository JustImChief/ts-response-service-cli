import { AxiosResponse } from 'axios';
import { default as ResponseServiceError } from './ResponseServiceError';
declare class ResponseService {
    doFailureAction<T = ResponseServiceError>(error: T): Promise<T>;
    doSuccessAction(response: AxiosResponse<any>): any;
    processResponse(promise: Promise<AxiosResponse<any>>): Promise<AxiosResponse<any>>;
}
export default ResponseService;
export { ResponseServiceError };
