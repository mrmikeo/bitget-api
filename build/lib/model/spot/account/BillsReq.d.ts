export declare class BillsReq {
    /**
     * 币种ID
     */
    private _coinId;
    /**
     * 分组类型
     */
    private _groupType;
    /**
     * 业务类型
     */
    private _bizType;
    /**
     * 传入billId ,查之前的数据
     */
    private _after;
    /**
     * 传入billId,查之后的数据
     */
    private _before;
    private _limit;
    get coinId(): string;
    set coinId(value: string);
    get groupType(): string;
    set groupType(value: string);
    get bizType(): string;
    set bizType(value: string);
    get after(): string;
    set after(value: string);
    get before(): string;
    set before(value: string);
    get limit(): string;
    set limit(value: string);
}
