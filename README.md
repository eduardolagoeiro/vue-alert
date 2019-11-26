# vue-alert

## install

```
npm i px-vue-alert
```



## add in main.js

```
import PxVueAlert from 'px-vue-alert'
Vue.use(PxVueAlert, { store })
```



## add in app.vue


## template
```
<template>
	<div id="app">
		<router-view/>
		<px-block-page/>
		<px-notifications/>
	</div>
</template>
```


## style
```
<style src="../node_modules/px-vue-alert/dist/px-vue-alert.css"></style>
```

## block ui actions:

* toggleLoading({ message })
* blockMessage({ message, icon, type, delay })

## notifications actions:

* success (message)
* error (message)

## clear all action:
* clear ()
