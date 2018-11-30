import fetch from './axios'
export const getLogoHot = (params={}) => fetch("GET","/lottery/api/v1/getLogoHot",params);
 
 
 // post
 export const getActivity = (params={}) => fetch("POST","/lottery/api/v1/getActivityById", params);
 

 export const getCompany = (params) => fetch("POST","http://xp.weilian.cn:8199/NVRCT/sevenStarController/getAllCompany",params)
 