export declare class OrdersReq {
    /**
     * 币对
     */
    private _symbol;
    /**
     * 订单方向
     */
    private _side;
    /**
     * 订单类型
     */
    private _orderType;
    /**
     * 订单控制类型
     */
    private _force;
    /**
     * 委托价格，仅适用于限价单
     */
    private _price;
    /**
     * 数量
     */
    private _quantity;
    /**
     * 客户端订单ID
     */
    private _clientOrderId;
    get symbol(): string;
    set symbol(value: string);
    get side(): string;
    set side(value: string);
    get orderType(): string;
    set orderType(value: string);
    get force(): string;
    set force(value: string);
    get price(): string;
    set price(value: string);
    get quantity(): string;
    set quantity(value: string);
    get clientOrderId(): string;
    set clientOrderId(value: string);
}
