"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixPlanApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixPlanApi extends BaseApi_1.BaseApi {
    placePlan(placePlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/placePlan';
        const headers = this.signer('POST', url, placePlanReq);
        return this.axiosInstance.post(url, placePlanReq, { headers });
    }
    modifyPlan(modifyPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyPlan';
        const headers = this.signer('POST', url, modifyPlanReq);
        return this.axiosInstance.post(url, modifyPlanReq, { headers });
    }
    modifyPlanPreset(modifyPlanPresetReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyPlanPreset';
        const headers = this.signer('POST', url, modifyPlanPresetReq);
        return this.axiosInstance.post(url, modifyPlanPresetReq, { headers });
    }
    modifyTPSLPlan(modifyTPSLPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyTPSLPlan';
        const headers = this.signer('POST', url, modifyTPSLPlanReq);
        return this.axiosInstance.post(url, modifyTPSLPlanReq, { headers });
    }
    placeTPSL(placeTPSLReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/placeTPSL';
        const headers = this.signer('POST', url, placeTPSLReq);
        return this.axiosInstance.post(url, placeTPSLReq, { headers });
    }
    cancelPlan(cancelPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/cancelPlan';
        const headers = this.signer('POST', url, cancelPlanReq);
        return this.axiosInstance.post(url, cancelPlanReq, { headers });
    }
    currentPlan(symbol, isPlan) {
        const url = config_1.MIX_URL.MIX_PLAN + '/currentPlan';
        const qsOrBody = { symbol, isPlan };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    historyPlan(symbol, startTime, endTime, pageSize, isPre, isPlan) {
        const url = config_1.MIX_URL.MIX_PLAN + '/historyPlan';
        const qsOrBody = { symbol, startTime, endTime, pageSize, isPre, isPlan };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixPlanApi = MixPlanApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4UGxhbkFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWl4L01peFBsYW5BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1DO0FBRW5DLHNDQUFrQztBQU9sQyxNQUFhLFVBQVcsU0FBUSxpQkFBTztJQUNuQyxTQUFTLENBQUMsWUFBMEI7UUFDaEMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzVDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFFRCxVQUFVLENBQUMsYUFBNEI7UUFDbkMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUN2RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxtQkFBd0M7UUFDckQsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUE7UUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBQyxPQUFP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