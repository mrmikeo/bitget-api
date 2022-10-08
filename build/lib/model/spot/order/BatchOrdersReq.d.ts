import { OrdersReq } from './OrdersReq';
export declare class BatchOrdersReq {
    private _symbol;
    private _orderList;
    get symbol(): string;
    set symbol(value: string);
    get orderList(): OrdersReq[];
    set orderList(value: OrdersReq[]);
}
