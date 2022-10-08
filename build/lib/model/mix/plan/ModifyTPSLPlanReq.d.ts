export declare class ModifyTPSLPlanReq {
    /**
     * 合约交易对
     */
    private _symbol;
    /**
     * 保证金币种
     */
    private _marginCoin;
    private _orderId;
    private _triggerPrice;
    private _planType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderId(): string;
    set orderId(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get planType(): string;
    set planType(value: string);
}
