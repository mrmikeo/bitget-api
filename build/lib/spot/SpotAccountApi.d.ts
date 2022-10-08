import { BaseApi } from '../BaseApi';
import { BillsReq } from '../model/spot/account/BillsReq';
export declare class SpotAccountApi extends BaseApi {
    assets(): Promise<import("axios").AxiosResponse<any>>;
    bills(billsReq: BillsReq): Promise<import("axios").AxiosResponse<any>>;
    transferRecords(coinId: string, fromType: string, limit: string, after: string, before: string): Promise<import("axios").AxiosResponse<any>>;
}
