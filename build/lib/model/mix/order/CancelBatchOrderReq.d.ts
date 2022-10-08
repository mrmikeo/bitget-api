export declare class CancelBatchOrderReq {
    private _symbol;
    private _marginCoin;
    private _orderIds;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderIds(): string[];
    set orderIds(value: string[]);
}
