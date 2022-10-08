import { BaseApi } from '../BaseApi';
import { OrdersReq } from '../model/spot/order/OrdersReq';
import { BatchOrdersReq } from '../model/spot/order/BatchOrdersReq';
import { CancelOrderReq } from '../model/spot/order/CancelOrderReq';
import { CancelBatchOrderReq } from '../model/spot/order/CancelBatchOrderReq';
import { OrderInfoReq } from '../model/spot/order/OrderInfoReq';
import { OpenOrdersReq } from '../model/spot/order/OpenOrdersReq';
import { HistoryReq } from '../model/spot/order/HistoryReq';
import { FillsReq } from '../model/spot/order/FillsReq';
export declare class SpotOrderApi extends BaseApi {
    orders(ordersReq: OrdersReq): Promise<import("axios").AxiosResponse<any>>;
    batchOrders(batchOrdersReq: BatchOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    cancelOrder(cancelOrderReq: CancelOrderReq): Promise<import("axios").AxiosResponse<any>>;
    cancelBatchOrder(cancelBatchOrderReq: CancelBatchOrderReq): Promise<import("axios").AxiosResponse<any>>;
    orderInfo(orderInfoReq: OrderInfoReq): Promise<import("axios").AxiosResponse<any>>;
    openOrders(openOrdersReq: OpenOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    history(historyReq: HistoryReq): Promise<import("axios").AxiosResponse<any>>;
    fills(fillsReq: FillsReq): Promise<import("axios").AxiosResponse<any>>;
}
