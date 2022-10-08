import { BaseApi } from '../BaseApi';
export declare class SpotMarketApi extends BaseApi {
    fills(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    depth(symbol: string, limit: string, type: string): Promise<import("axios").AxiosResponse<any>>;
    ticker(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    tickers(): Promise<import("axios").AxiosResponse<any>>;
    candles(symbol: string, period: string, after: string, before: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
}
