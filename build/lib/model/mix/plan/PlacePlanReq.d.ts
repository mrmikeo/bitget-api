export declare class PlacePlanReq {
    /**
     * 合约交易对
     */
    private _symbol;
    /**
     * 保证金币种
     */
    private _marginCoin;
    /**
     * 下单数量
     */
    private _size;
    /**
     * 委托价格
     */
    private _executePrice;
    /**
     * 触发价格
     */
    private _triggerPrice;
    /**
     * 委托方向
     */
    private _side;
    /**
     * 交易类型
     */
    private _orderType;
    /**
     * 触发类型 成交价触发 标记价触发
     */
    private _triggerType;
    private _clientOid;
    /**
     * 预设止盈价
     */
    private _presetTakeProfitPrice;
    /**
     * 预设止损价
     */
    private _presetStopLossPrice;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get size(): string;
    set size(value: string);
    get executePrice(): string;
    set executePrice(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get side(): string;
    set side(value: string);
    get orderType(): string;
    set orderType(value: string);
    get triggerType(): string;
    set triggerType(value: string);
    get clientOid(): string;
    set clientOid(value: string);
    get presetTakeProfitPrice(): string;
    set presetTakeProfitPrice(value: string);
    get presetStopLossPrice(): string;
    set presetStopLossPrice(value: string);
}
