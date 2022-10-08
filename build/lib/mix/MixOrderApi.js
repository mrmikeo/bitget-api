"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixOrderApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixOrderApi extends BaseApi_1.BaseApi {
    placeOrder(placeOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/placeOrder';
        const headers = this.signer('POST', url, placeOrderReq);
        return this.axiosInstance.post(url, placeOrderReq, { headers });
    }
    batchOrders(batchOrdersReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/batch-orders';
        const headers = this.signer('POST', url, batchOrdersReq);
        return this.axiosInstance.post(url, batchOrdersReq, { headers });
    }
    cancelOrder(cancelOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/cancel-order';
        const headers = this.signer('POST', url, cancelOrderReq);
        return this.axiosInstance.post(url, cancelOrderReq, { headers });
    }
    cancelBatchOrder(cancelBatchOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/cancel-batch-orders';
        const headers = this.signer('POST', url, cancelBatchOrderReq);
        return this.axiosInstance.post(url, cancelBatchOrderReq, { headers });
    }
    history(symbol, startTime, endTime, pageSize, lastEndId, isPre) {
        const url = config_1.MIX_URL.MIX_ORDER + '/history';
        const qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId, isPre };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    current(symbol) {
        const url = config_1.MIX_URL.MIX_ORDER + '/current';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    detail(symbol, orderId) {
        const url = config_1.MIX_URL.MIX_ORDER + '/detail';
        const qsOrBody = { symbol, orderId };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    fills(symbol, orderId) {
        const url = config_1.MIX_URL.MIX_ORDER + '/fills';
        const qsOrBody = { symbol, orderId };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixOrderApi = MixOrderApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4T3JkZXJBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21peC9NaXhPcmRlckFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFFbkMsc0NBQWtDO0FBS2xDLE1BQWEsV0FBWSxTQUFRLGlCQUFPO0lBRXBDLFVBQVUsQ0FBQyxhQUE0QjtRQUNuQyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVELFdBQVcsQ0FBQyxjQUE4QjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxjQUE4QjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxD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