const state = {
	// type, message
	alert: null,
	// message
	loading: null,
	// message, icon, type
	block: null
}

const actions = {
	success ({ commit }, message) {
		commit('success', message)
	},
	error ({ commit }, message) {
		commit('error', message)
	},
	clear ({ commit }) {
		commit('clear')
	},
	toggleLoading ({ commit }, loading) {
		commit('toggleLoading', loading)
	},
	blockMessage ({ commit }, block) {
		commit('blockMessage', block)
	}
}

const mutations = {
	success (state, message) {
		state.alert = {
			type: 'success',
			message
		}
	},
	error (state, message) {
		state.alert = {
			type: 'danger',
			message
		}
	},
	clear (state) {
		state.alert = null
		state.block = null
		state.loading = null
	},
	toggleLoading (state, data = {}) {
		if (state.loading) {
			state.loading = null
		} else {
			const { message } = data
			state.loading = { message: message || 'loading' }
		}
	},
	blockMessage (state, { message, icon, type, delay }) {
		state.loading = null
		state.block = { icon, message, type }
		setTimeout(() => {
			state.block = null
		}, delay || 1200)
	}
}

const store = {
	namespaced: true,
	state,
	actions,
	mutations
}

export default store
