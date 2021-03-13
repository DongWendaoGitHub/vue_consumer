import axios from 'axios';/*访问后台框架*/
import router from '../router';
axios.defaults.timeout = 5000;  //超时时间是5秒
//axios.defaults.withCredentials = true;  //允许跨域
//Content-Type 响应头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//基础url


axios.defaults.baseURL = "http://8.131.75.15:8081/customer";

//访问回来后，响应拦截器
axios.interceptors.response.use(
  response => {
    //如果reponse里面的status是200，说明访问到接口了，否则错误
    if(response.status == 200){
      return Promise.resolve(response);/*Promise是异步执行的框架*/
    }else{
      return Promise.reject(response);
    }
  },
  error => {
    if(error.response.status){
      switch(error.response.status){
        case 401:       //未登录
          router.replace({
            path:'/',
            query:{
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        case 404:   //没找到
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * 封装get方法
 */
export function get(url,params={}){
  return new Promise((resolve,reject) => {
    /**axios 传入url  传入参数*/
    axios.get(url,{params:params})
      .then(response =>{
        resolve(response.data);
      })
      .catch(err =>{
        reject(err);
      })
  });
}

/**
 * 封装post方法
 */
export function post(url,data={}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response =>{
        resolve(response.data);
      })
      .catch(err =>{
        reject(err);
      })
  });
}

/*
import axios from 'axios'
axios.defaults.timeout = 5000 /!* 超时时间不超过5秒 *!/
axios.defaults.withCredentials = true /!* 允许跨域 *!/

/!* 设置响应头   Content-type *!/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 配置基础url   意思是普通的访问不需要写基础URL了   是后台的application.properties里面的访问地址
axios.defaults.baseURL = 'http://localhost:8888'

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果reponse里面的status是200，说明访问到接口了，否则错误
    // eslint-disable-next-line eqeqeq
    if (response.status == 200) {
      return Promise.resolve(response)/!* 成功 *!/
    } else {
      return Promise.reject(response) /!* 就不往下执行了 *!/
    }
  },
  error => { /!* 还有直接没有访问到后台接口 *!/
    if (error.response.status) {
      switch (error.response.status) {
        case 401: // 未登录， 让它返回到默认页面
          // eslint-disable-next-line no-undef
          router.replace({/!* 重定向 到根目录 *!/
            path: '/',
            query: {
              // eslint-disable-next-line no-undef
              redirect: router.currentRoute.fullPath /!* 实际上是转向了登陆页面 *!/
            }
          })
          break
        case 404: // 没找到
          break
      }
      return Promise.reject(error.response)/!* 返回错误信息 *!/
    }
  }
)

/!**
 * 封装get方法，供外界访问，参数是params
 *!/
export function get (url, params = {}) {
  return new Promise((resolve, reject) => { /!* new Promise  是让它异步访问   resolve正常的有返回结果, reject异常的访问 *!/
    axios.get(url, {params: params})
      .then(response => { /!* 获取到返回值，处理返回值 *!/
        resolve(response.data)/!* 正常的 *!/
      })
      /!* 异常的 *!/
      .catch(err => {
        reject(err)
      })
  })
}

/!**
 * 封装post方法，参数  叫做data，因为是表单提交的
 *!/
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/!** 再写一个工具类，index.js，  引入get方法和post方法 *!/
*/
