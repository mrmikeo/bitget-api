export declare class ModifyPlanPresetReq {
    /**
     * 合约交易对
     */
    private _symbol;
    /**
     * 保证金币种
     */
    private _marginCoin;
    private _presetTakeProfitPrice;
    private _presetStopLossPrice;
    private _orderId;
    private _planType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get presetTakeProfitPrice(): string;
    set presetTakeProfitPrice(value: string);
    get presetStopLossPrice(): string;
    set presetStopLossPrice(value: string);
    get orderId(): string;
    set orderId(value: string);
    get planType(): string;
    set planType(value: string);
}
