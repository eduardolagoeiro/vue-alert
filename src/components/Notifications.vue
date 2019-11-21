<template>
	<div>
		<notifications group="notifications-default" position="top left"/>
	</div>
</template>

<script>
import Vue from 'vue'
import Notifications from 'vue-notification'
import Toasted from 'vue-toasted'
import { mapState, mapActions } from 'vuex'

Vue.use(Notifications)
Vue.use(Toasted)

export default {
	name: 'ui-notifications',
	data: () => ({
		toastActions: false,
		toastStyle: 'bubble',
		toastVerticalPosition: 'bottom',
		toastHorizontalPosition: 'center'
	}),
	computed: {
		...mapState('alert', ['alert'])
	},
	watch: {
		alert: function () {
			this.showToast()
		}
	},
	methods: {
		...mapActions('alert', ['clear']),
		getCustomClasses () {
			if (!this.alert.type) return null
			return `bg-${this.alert.type} text-${this.alert.type === 'warning' ? 'dark' : 'white'}`
		},
		getActionCustomClasses () {
			if (!this.alert.type) return null
			return `opacity-75 text-${this.alert.type === 'warning' ? 'dark' : 'white'}`
		},
		getToastText () {
			if (this.alert.message === 'Login feito com sucesso!') {
				return '<i class="ion ion-md-checkmark-circle-outline mr-2"></i> ' + this.alert.message
			} else if (this.alert.message === 'Login inválido!') {
				return '<i class="ion ion-md-close-circle-outline mr-2"></i> ' + this.alert.message
			} else if (this.alert.message === 'Deslogado com sucesso!') {
				return '<i class="ion ion-md-checkmark-circle-outline mr-2"></i> ' + this.alert.message
			}
			return this.alert.message
		},
		showToast () {
			if (!this.alert.message || !this.alert.type) return
			const toastText = this.getToastText()
			const actions = [{
				text: 'Cancel',
				onClick: (e, toastObject) => {
					toastObject.goAway(0)
				},
				class: this.getActionCustomClasses()
			}, {
				text: 'Undo',
				push: {
					name: 'somewhere',
					dontClose: true
				},
				class: this.getActionCustomClasses()
			}]
			this.$toasted.show(toastText, {
				theme: this.toastStyle,
				position: `${this.toastVerticalPosition}-${this.toastHorizontalPosition}`,
				action: this.toastActions ? actions : null,
				icon: this.toastIcon || null,
				className: this.getCustomClasses(),
				duration: 2500
			})
		}
	}
}
</script>

<style src="../../vendor/libs/vue-notification/vue-notification.scss" lang="scss"></style>
<style src="../../vendor/libs/vue-toasted/vue-toasted.scss" lang="scss"></style>

<!-- Custom template animation -->
<style>
	.v-fade-left-enter-active,
	.v-fade-left-leave-active,
	.v-fade-left-move {
		transition: all .5s;
	}
	.v-fade-left-enter,
	.v-fade-left-leave-to {
		opacity: 0;
		transform: translateX(-500px) scale(0.2);
	}
</style>
