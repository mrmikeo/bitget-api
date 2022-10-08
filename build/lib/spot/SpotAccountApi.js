"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotAccountApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotAccountApi extends BaseApi_1.BaseApi {
    assets() {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/assets';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    bills(billsReq) {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/bills';
        const headers = this.signer('POST', url, billsReq);
        return this.axiosInstance.post(url, billsReq, { headers });
    }
    transferRecords(coinId, fromType, limit, after, before) {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/transferRecords';
        const qsOrBody = { coinId, fromType, limit, after, before };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    
    withdraw(coin, address ,chain ,amount){
        const url = config_1.SPOT_URL.SPOT_WALLET + '/withdrawal';
        const qsOrBody = {coin: coin, address: address, chain: chain, amount: amount};
        const headers = this.signer('POST', url, qsOrBody)
        return this.axiosInstance.post(url, qsOrBody, { headers })
    }

    withdrawList(coin, startTime, endTime, pageNo, pageSize ){
        const url = config_1.SPOT_URL.SPOT_WALLET + '/withdrawal-list';
        const qsOrBody = {coin,startTime,endTime,pageNo,pageSize};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, { headers, params: qsOrBody })
    }
    
}
exports.SpotAccountApi = SpotAccountApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdEFjY291bnRBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3Nwb3QvU3BvdEFjY291bnRBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1DO0FBQ25DLHNDQUFtQztBQUduQyxNQUFhLGNBQWUsU0FBUSxpQkFBTztJQUN2QyxNQUFNO1FBQ0YsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFpQjtRQUNuQixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFhLEVBQUMsUUFBZSxFQUFDLEtBQVksRUFBQyxLQUFZLEVBQUMsTUFBYTtRQUNqRixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztDQUNKO0FBbkJELHdDQW1CQyJ9