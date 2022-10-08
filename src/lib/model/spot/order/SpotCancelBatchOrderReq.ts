export class SpotCancelBatchOrderReq {
    private _symbol!:string;

    private _orderIds!:string[];


    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get orderIds(): string[] {
        return this._orderIds;
    }

    set orderIds(value: string[]) {
        this._orderIds = value;
    }
}