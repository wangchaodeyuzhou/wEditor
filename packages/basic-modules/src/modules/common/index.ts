/**
 * @description common module
 * @author wangfupeng
 */
import { IModuleConf } from '@wangchaodeyuzhou/core'
import { enterMenuConf } from './menu/index'

const commonModule: Partial<IModuleConf> = {
  menus: [enterMenuConf],
}

export default commonModule
