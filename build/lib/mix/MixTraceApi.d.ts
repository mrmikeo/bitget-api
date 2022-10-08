import { BaseApi } from '../BaseApi';
import { CloseTrackOrderReq } from '../model/mix/trace/CloseTrackOrderReq';
export declare class MixTraceApi extends BaseApi {
    closeTrackOrder(closeTrackOrderReq: CloseTrackOrderReq): Promise<import("axios").AxiosResponse<any>>;
    currentTrack(symbol: string, productType: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    historyTrack(startTime: string, endTime: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    summary(): Promise<import("axios").AxiosResponse<any>>;
    profitSettleTokenIdGroup(): Promise<import("axios").AxiosResponse<any>>;
    profitDateGroupList(pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    profitDateList(marginCoin: string, date: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    waitProfitDateList(pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
}
