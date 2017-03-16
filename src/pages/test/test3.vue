<template>
	<div class="hello">
		<h1>{{msg}}{{msgFromFather}}</h1>
		<button @click="onclickMe">fuck!</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				msg:"hello from componenta"
			}
		},
		props:['msgFromFather'],
		methods:{
			onclickMe(){
				console.log(this.msg)
				this.$emit("childWay",this.msg)
			}
		}
	}
</script>