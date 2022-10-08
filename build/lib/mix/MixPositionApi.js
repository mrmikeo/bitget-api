"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixPositionApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixPositionApi extends BaseApi_1.BaseApi {
    singlePosition(symbol, marginCoin) {
        const url = config_1.MIX_URL.MIX_POSITION + '/singlePosition';
        const qsOrBody = { symbol, marginCoin };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    allPosition(productType, marginCoin) {
        const url = config_1.MIX_URL.MIX_POSITION + '/allPosition';
        const qsOrBody = { productType, marginCoin };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixPositionApi = MixPositionApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4UG9zaXRpb25BcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21peC9NaXhQb3NpdGlvbkFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFDbkMsc0NBQWtDO0FBRWxDLE1BQWEsY0FBZSxTQUFRLGlCQUFPO0lBRXZDLGNBQWMsQ0FBQyxNQUFjLEVBQUMsVUFBaUI7UUFDM0MsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFDckQsTUFBTSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBbUIsRUFBQyxVQUFpQjtRQUM3QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Q0FDSjtBQWZELHdDQWVDIn0=