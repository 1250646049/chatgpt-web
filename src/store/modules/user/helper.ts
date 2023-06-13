import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
       avatar: 'http://www.chinaasd.com/wp-content/uploads/2016/09/logo1.png',
      name: '爱仕达-员工',
      description: 'Work on <a href="http://www.chinaasd.com/" class="text-blue-500" target="_blank" >爱仕达</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
