/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import '@wangchaodeyuzhou/basic-modules/dist/css/style.css'
import basicModules from '@wangchaodeyuzhou/basic-modules'

import '@wangchaodeyuzhou/list-module/dist/css/style.css'
import wangEditorListModule from '@wangchaodeyuzhou/list-module'

// table-module
import '@wangchaodeyuzhou/table-module/dist/css/style.css'
import wangEditorTableModule from '@wangchaodeyuzhou/table-module'

// video-module
import '@wangchaodeyuzhou/video-module/dist/css/style.css'
import wangEditorVideoModule from '@wangchaodeyuzhou/video-module'

// upload-image-module
import '@wangchaodeyuzhou/upload-image-module/dist/css/style.css'
import wangEditorUploadImageModule from '@wangchaodeyuzhou/upload-image-module'

// code-highlight
import '@wangchaodeyuzhou/code-highlight/dist/css/style.css'
import { wangEditorCodeHighlightModule } from '@wangchaodeyuzhou/code-highlight'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)
