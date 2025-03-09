// Vue开发中, 会用到重复使用的API, 可以进行API管理 
// 公共接口位置, 可以创建单独文件进行管理, 方便以后更改 

// axios二次封装 例子 
import axios from 'axios'
const service = axios.create({
    baseURL: 'http//'
})
// 请求拦截器 
service.iterceptors.request.use(config=>config) 
// 响应拦截器 
service.iterceptors.request.use(response=>response,
    err=>Promise.reject(err)
);
export default service 
