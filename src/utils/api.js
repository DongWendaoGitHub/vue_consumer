/*第一步  导入我们刚刚用npm install axios 命令导入的axios*/
import axios from "axios";

/*导入这个文件之后，他会自己去找router包里面的index.js*/
import router from "../router";

/*第二步  如果响应失败的话  我要弹信息出来  elementui 里面*/
import { Message } from 'element-ui';

/*success   主要是通过status状态码  data是json 的对象*/

/*error 是压根没有访问到我们后端接口，拿不到json*/
/*就通过response.code 响应码*/

/*响应式的拦截器interceptors.response   success表示成功调到了后端接口，但是后端不许你做这个事情*/
axios.interceptors.response.use(success=>{
    /*判断业务逻辑是否正确*/
    if(success.status && success.status == 200){
        /*判断了所有的逻辑错误*/
        if(success.data.code==500 || success.data.code==401 || success.data.code==403){
            Message.error({message:success.data.message});
            return;
        }

        /*剩下的都是相应成功的,判断要不要把信息填出来  操作成功？更新成功？*/
        if(success.data.message){
            Message.success({message:success.data.message});
        }
    }
    /*响应成功， ruturn  返回出去*/
    return success.data;
}
,
    /*连接口都访问失败了*/
    error => {
        if(error.response.code==504 || error.response.code ==404){
            Message.error({message:'服务器访问失败'});
        }
        else if(error.response.code == 403){
            Message.error({message:'权限不足，请联系我们'});
        }
        else if(error.response.data == 401){
            Message.error({message:'您未登录，请登录'});/*提示完后跳转到登录页*/
            router.replace('/');/*直接替换*/
        }
        else{/*如果状态码并不在判断里面*/
            if(error.response.data.message){/*如果有信息，打印信息*/
                Message.error({message:error.response.data.message});
            }
            else{/*如果没有响应信息*/
                Message.error({message:'未知错误'});
            }
        }
        return;/*error   返回空*/
});

let base = '';
/*传送  json  格式的 post  请求*/
export const postRequest=(url,params)=>{
    return axios({
        method: 'post',
        url: '${base}${url}',
        data: params
    })
}
