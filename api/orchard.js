import { get,post } from "@/api/request/request"
//果园数据
export const getFarmById = (farmId) => get(`/base/api/base/farm/getFarmById?farmId=${farmId}`);