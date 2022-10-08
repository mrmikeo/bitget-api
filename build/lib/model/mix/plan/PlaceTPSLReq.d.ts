export declare class PlaceTPSLReq {
    /**
     * 合约交易对
     */
    private _symbol;
    /**
     * 保证金币种
     */
    private _marginCoin;
    private _planType;
    private _triggerPrice;
    private _holdSide;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get planType(): string;
    set planType(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get holdSide(): string;
    set holdSide(value: string);
}
