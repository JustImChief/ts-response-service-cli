import { AxiosResponse } from 'axios';
import { default as ResponseServiceError } from './ResponseServiceError';
declare class ResponseService<E = ResponseServiceError, R = AxiosResponse> {
    doFailureAction(error: Promise<E>): Promise<E>;
    doSuccessAction(response: any): Promise<R>;
    processResponse(promise: Promise<AxiosResponse<any>>): Promise<AxiosResponse<any>>;
}
export default ResponseService;
export { ResponseServiceError };
