import { BaseApi } from '../BaseApi';
export declare class SpotPublicApi extends BaseApi {
    time(): Promise<import("axios").AxiosResponse<any>>;
    currencies(): Promise<import("axios").AxiosResponse<any>>;
    products(): Promise<import("axios").AxiosResponse<any>>;
    product(symbol: string): Promise<import("axios").AxiosResponse<any>>;
}
