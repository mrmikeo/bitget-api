import { BaseApi } from '../BaseApi';
import { PlacePlanReq } from '../model/mix/plan/PlacePlanReq';
import { ModifyPlanReq } from '../model/mix/plan/ModifyPlanReq';
import { ModifyPlanPresetReq } from '../model/mix/plan/ModifyPlanPresetReq';
import { ModifyTPSLPlanReq } from '../model/mix/plan/ModifyTPSLPlanReq';
import { PlaceTPSLReq } from '../model/mix/plan/PlaceTPSLReq';
import { CancelPlanReq } from '../model/mix/plan/CancelPlanReq';
export declare class MixPlanApi extends BaseApi {
    placePlan(placePlanReq: PlacePlanReq): Promise<import("axios").AxiosResponse<any>>;
    modifyPlan(modifyPlanReq: ModifyPlanReq): Promise<import("axios").AxiosResponse<any>>;
    modifyPlanPreset(modifyPlanPresetReq: ModifyPlanPresetReq): Promise<import("axios").AxiosResponse<any>>;
    modifyTPSLPlan(modifyTPSLPlanReq: ModifyTPSLPlanReq): Promise<import("axios").AxiosResponse<any>>;
    placeTPSL(placeTPSLReq: PlaceTPSLReq): Promise<import("axios").AxiosResponse<any>>;
    cancelPlan(cancelPlanReq: CancelPlanReq): Promise<import("axios").AxiosResponse<any>>;
    currentPlan(symbol: string, isPlan: string): Promise<import("axios").AxiosResponse<any>>;
    historyPlan(symbol: string, startTime: string, endTime: string, pageSize: string, isPre: boolean, isPlan: string): Promise<import("axios").AxiosResponse<any>>;
}
