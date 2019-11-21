import store from './store/alert'
import BlockPage from './components/BlockPage'
import Notifications from './components/Notifications'

export default {
	install (Vue, options) {
		if (!options || !options.store) {
			throw new Error('Please initialise plugin with a Vuex store.')
		}
		options.store.registerModule('alert', store)
		Vue.component('px-block-page', BlockPage)
		Vue.component('px-notifications', Notifications)
	}
}
