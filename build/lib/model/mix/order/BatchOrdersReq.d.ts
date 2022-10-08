import { PlaceOrderBaseParam } from './PlaceOrderBaseParam';
export declare class BatchOrdersReq {
    private _symbol;
    private _marginCoin;
    private _orderDataList;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderDataList(): PlaceOrderBaseParam[];
    set orderDataList(value: PlaceOrderBaseParam[]);
}
