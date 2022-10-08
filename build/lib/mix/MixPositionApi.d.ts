import { BaseApi } from '../BaseApi';
export declare class MixPositionApi extends BaseApi {
    singlePosition(symbol: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
    allPosition(productType: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
}
