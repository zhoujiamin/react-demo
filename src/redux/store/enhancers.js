// ======================================================
// 配置 Store 增强器
// ======================================================
const enhancers = []

if (__DEV__) {
  /** Redux DevTools **/

  /* 1. Chrome 插件 Redux DevTools（默认）
     P.S: 独立窗口可调用 window.devToolsExtension.open() 
    使用：https://github.com/zalmoxisus/redux-devtools-extension#usage
  */
  if (!__COMPONENT_DEVTOOLS__) {    
    /* const devToolsExtension = window.devToolsExtension*/
    const __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
      enhancers.push(__REDUX_DEVTOOLS_EXTENSION__())
    }
  }
  
  /* 2. 内嵌在页面中的 Redux DevTools 组件 
    使用：https://github.com/gaearon/redux-devtools
  */

  if (__COMPONENT_DEVTOOLS__) {
    const DevTools = require('COMPONENT/DevTools').default
    enhancers.push(DevTools.instrument())
  }
}

export default enhancers
