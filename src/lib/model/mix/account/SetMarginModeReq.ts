export class SetMarginModeReq {
    private _marginCoin!:string;
    private _symbol!:string;
    private _marginMode!:string;

    get marginCoin(): string {
        return this._marginCoin;
    }

    set marginCoin(value: string) {
        this._marginCoin = value;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get marginMode(): string {
        return this._marginMode;
    }

    set marginMode(value: string) {
        this._marginMode = value;
    }
}