import store from './store/alert'
import BlockPage from './components/BlockPage'
import ToastNotify from './components/ToastNotify'
import BlockUI from 'vue-blockui'
import Notifications from 'vue-notification'
import Toasted from 'vue-toasted'

export default {
	install (Vue, options) {
		if (!options || !options.store) {
			throw new Error('Please initialise plugin with a Vuex store.')
		}
		Vue.use(Notifications)
		Vue.use(Toasted)
		Vue.use(BlockUI)
		options.store.registerModule('alert', store)
		Vue.component('px-block-page', BlockPage)
		Vue.component('px-toast-notify', ToastNotify)
	}
}
