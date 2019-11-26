<template>
  <div>
		<BlockUI v-if="message" :message="message">
			<div v-if="block" :class="block.type ? `text-${block.type}` : 'text-primary'">
				<i id="block-icon" :class="block.icon"></i>
			</div>
			<div v-else-if="loading" id="spinner">
				<img id="prlx-icon" :src="spinnerImageSrc">
			</div>
		</BlockUI>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'block-page',
	props: ['spinnerImageSrc'],
	computed: {
		...mapState('alert', ['loading', 'block']),
		message () {
			if (this.block) return this.block.message
			if (this.loading) return this.loading.message
			return null
		}
	}
}
</script>

<style>
  .loading-container .loading-backdrop {
    background: #000 !important;
		opacity: .75 !important;
  }
  .loading-container .loading {
		background: white !important;
		border-radius: 4px !important;
		box-shadow: none !important;
  }
	.loading-icon {
		margin: -10px !important
	}
</style>

<style scoped>
	@keyframes rotating {
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}

	#prlx-icon, #block-icon {
		width: 120px;
		height: 120px;
		font-size: 120px;
	}

	#spinner {
		animation: rotating 1.3s linear infinite;
		width: auto
	}

</style>
