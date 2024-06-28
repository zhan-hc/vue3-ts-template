import { Get } from '@/services'
/**
 * 调用方式
  const [e, r] = await api.getUserInfo(userid)
  if (!e && r) this.userInfo = r.data.userinfo
 */
export const getUserInfo = (params: any = {}) => Get('/user/getUser', params)