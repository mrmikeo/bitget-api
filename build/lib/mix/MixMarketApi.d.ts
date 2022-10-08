import { BaseApi } from '../BaseApi';
export declare class MixMarketApi extends BaseApi {
    contracts(productType: string): Promise<import("axios").AxiosResponse<any>>;
    depth(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    ticker(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    tickers(productType: string): Promise<import("axios").AxiosResponse<any>>;
    fills(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    candles(symbol: string, granularity: string, startTime: string, endTime: string): Promise<import("axios").AxiosResponse<any>>;
    index(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    fundingTime(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    historyFundRate(symbol: string, pageSize: string, pageNo: string, nextPage: boolean): Promise<import("axios").AxiosResponse<any>>;
    currentFundRate(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    openInterest(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    markPrice(symbol: string): Promise<import("axios").AxiosResponse<any>>;
}
