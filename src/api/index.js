import {get,post} from "./http";  //引入相关的get  post方法

// 判断是否登录成功     业务相关
export const getLoginStatus = (params) => post(`customers/loginStatus`,params);
