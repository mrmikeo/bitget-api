"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotPublicApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotPublicApi extends BaseApi_1.BaseApi {
    time() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/time';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    currencies() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/currencies';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    products() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/products';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    product(symbol) {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/product';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.SpotPublicApi = SpotPublicApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdFB1YmxpY0FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc3BvdC9TcG90UHVibGljQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtQztBQUNuQyxzQ0FBbUM7QUFFbkMsTUFBYSxhQUFjLFNBQVEsaUJBQU87SUFDdEMsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLGlCQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxVQUFVO1FBQ04sTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWE7UUFDakIsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Q0FDSjtBQXpCRCxzQ0F5QkMifQ==