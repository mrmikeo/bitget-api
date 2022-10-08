import { SetLeverageReq } from '../model/mix/account/SetLeverageReq';
import { SetMarginReq } from '../model/mix/account/SetMarginReq';
import { SetMarginModeReq } from '../model/mix/account/SetMarginModeReq';
import { SetPositionModeReq } from '../model/mix/account/SetPositionModeReq';
import { OpenCountReq } from '../model/mix/account/OpenCountReq';
import { BaseApi } from '../BaseApi';
export declare class MixAccountApi extends BaseApi {
    account(symbol: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
    accounts(productType: string): Promise<import("axios").AxiosResponse<any>>;
    setLeverage(leverageReq: SetLeverageReq): Promise<import("axios").AxiosResponse<any>>;
    setMargin(setMarginReq: SetMarginReq): Promise<import("axios").AxiosResponse<any>>;
    setMarginMode(setMarginModeReq: SetMarginModeReq): Promise<import("axios").AxiosResponse<any>>;
    setPositionMode(setPositionModeReq: SetPositionModeReq): Promise<import("axios").AxiosResponse<any>>;
    openCount(openCountReq: OpenCountReq): Promise<import("axios").AxiosResponse<any>>;
}
