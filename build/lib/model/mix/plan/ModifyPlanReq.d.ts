export declare class ModifyPlanReq {
    /**
     * 合约交易对
     */
    private _symbol;
    /**
     * 保证金币种
     */
    private _marginCoin;
    private _orderId;
    private _executePrice;
    private _triggerPrice;
    private _triggerType;
    private _orderType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderId(): string;
    set orderId(value: string);
    get executePrice(): string;
    set executePrice(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get triggerType(): string;
    set triggerType(value: string);
    get orderType(): string;
    set orderType(value: string);
}
