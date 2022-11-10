
import MyRequest from '@/services/index'
export const getUser = (data:any) => {
  return MyRequest.request({
    url: '/user/userInfo',
    method: 'GET',
    params: data,
    interceptors: {
      requestInterceptors: (config) => {
        console.log('users请求拦截前')
        return config
      },
      responseInterceptors: (d) => {
        console.log('users相应拦截后')
        return d
      }
    }
  })
}