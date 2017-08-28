<template>
    <div class="hello"> 
        顶顶顶顶顶顶顶顶顶顶顶
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