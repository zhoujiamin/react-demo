import { replace, push, go, goBack, goForward} from 'react-router-redux'

/*
 *用于改变路由的Action Creator
 */
const replaceRoute = location => dispatch =>
  dispatch(replace(location))

const pushRoute = location => dispatch =>
  dispatch(push(location))

const goRoute = location => dispatch =>
  dispatch(go(location))

const goBackRoute = () => dispatch =>
  dispatch(goBack())

const goForwardRoute = () => dispatch =>
  dispatch(goForward())

export default {
    replaceRoute, pushRoute, goRoute, goBackRoute, goForwardRoute
}
