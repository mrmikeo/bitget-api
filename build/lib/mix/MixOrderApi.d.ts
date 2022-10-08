import { BaseApi } from '../BaseApi';
import { PlaceOrderReq } from '../model/mix/order/PlaceOrderReq';
import { BatchOrdersReq } from '../model/mix/order/BatchOrdersReq';
import { CancelOrderReq } from '../model/mix/order/CancelOrderReq';
import { CancelBatchOrderReq } from '../model/mix/order/CancelBatchOrderReq';
export declare class MixOrderApi extends BaseApi {
    placeOrder(placeOrderReq: PlaceOrderReq): Promise<import("axios").AxiosResponse<any>>;
    batchOrders(batchOrdersReq: BatchOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    cancelOrder(cancelOrderReq: CancelOrderReq): Promise<import("axios").AxiosResponse<any>>;
    cancelBatchOrder(cancelBatchOrderReq: CancelBatchOrderReq): Promise<import("axios").AxiosResponse<any>>;
    history(symbol: string, startTime: string, endTime: string, pageSize: number, lastEndId: string, isPre: boolean): Promise<import("axios").AxiosResponse<any>>;
    current(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    detail(symbol: string, orderId: string): Promise<import("axios").AxiosResponse<any>>;
    fills(symbol: string, orderId: string): Promise<import("axios").AxiosResponse<any>>;
}
