import { SpotOrdersReq } from './SpotOrdersReq';
export declare class SpotBatchOrdersReq {
    private _symbol;
    private _orderList;
    get symbol(): string;
    set symbol(value: string);
    get orderList(): SpotOrdersReq[];
    set orderList(value: SpotOrdersReq[]);
}
