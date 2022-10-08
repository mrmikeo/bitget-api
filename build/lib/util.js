"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJsonString = exports.encrypt = void 0;
const querystring_1 = require("querystring");
const crypto_1 = require("crypto");
/**
 * 获取签名器
 * @param apiKey
 * @param secretKey
 * @param timestamp
 * @param passphrase
 */
function getSigner(apiKey = '', secretKey = '', passphrase = '') {
    return (httpMethod, url, qsOrBody, locale = 'zh-CN') => {
        const timestamp = Date.now();
        const signString = encrypt(httpMethod, url, qsOrBody, timestamp, secretKey);
        return {
            'ACCESS-SIGN': signString,
            'ACCESS-TIMESTAMP': timestamp,
            'ACCESS-KEY': apiKey,
            'ACCESS-PASSPHRASE': passphrase,
            'Content-Type': 'application/json'
        };
    };
}
exports.default = getSigner;
/**
 * 加密算法
 * @param httpMethod
 * @param url
 * @param qsOrBody
 * @param timestamp
 * @param secretKey
 */
function encrypt(httpMethod, url, qsOrBody, timestamp, secretKey) {
    httpMethod = httpMethod.toUpperCase();
    const qsOrBodyStr = qsOrBody ? httpMethod === 'GET' ? '?' + querystring_1.stringify(qsOrBody) : toJsonString(qsOrBody) : '';
    const preHash = String(timestamp) + httpMethod + url + qsOrBodyStr;
    const mac = crypto_1.createHmac('sha256', secretKey);
    const preHashToMacBuffer = mac.update(preHash).digest();
    return preHashToMacBuffer.toString('base64');
}
exports.encrypt = encrypt;
function toJsonString(obj) {
    if (obj == null) {
        return null;
    }
    let json = JSON.stringify(obj);
    Object.keys(obj).filter(key => key[0] === '_').forEach(key => {
        json = json.replace(key, key.substring(1));
    });
    const reg = new RegExp('"_', 'g');
    return json.replace(reg, '"');
}
exports.toJsonString = toJsonString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUM7QUFDckMsbUNBQWlDO0FBV2pDOzs7Ozs7R0FNRztBQUNILFNBQXdCLFNBQVMsQ0FDN0IsU0FBaUIsRUFBRSxFQUNuQixZQUFvQixFQUFFLEVBQ3RCLGFBQXFCLEVBQUU7SUFHdkIsT0FBTyxDQUFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFFBQWlDLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBRSxFQUFFO1FBQzVGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRTFFLE9BQU87WUFDSCxhQUFhLEVBQUUsVUFBVTtZQUN6QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLG1CQUFtQixFQUFFLFVBQVU7WUFDL0IsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFBO0lBQ0wsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWxCRCw0QkFrQkM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFFBQTZDLEVBQUUsU0FBaUIsRUFBQyxTQUFnQjtJQUN0SSxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHVCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBRTdHLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQTtJQUVsRSxNQUFNLEdBQUcsR0FBRyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUMzQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDdkQsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDaEQsQ0FBQztBQVRELDBCQVNDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEdBQVc7SUFDcEMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3pELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBWEQsb0NBV0MifQ==