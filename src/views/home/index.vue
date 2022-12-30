<!--
 * @Author: You
 * @Date: 2022-12-30 14:30:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-30 17:18:09
 * @FilePath: \examsf:\Protest\newyear\src\views\home\index.vue
-->
<template>
    <div id="home-box">
        <div class="stars" ref="starsRef">
			<div class="star" v-for="(item, index) in starsCount" :key="index"></div>
		</div>
        <div class="content">
            <div class="head-title"> {{title}}</div>
            <div class="head-time" v-show="nextbox"><span>距离 </span>{{ gotimes }}</div>
            <div class="time-text" v-show="nextbox">
                {{ times }}
            </div>
            <div class="home-butt" v-show="!nextbox">
                <button @click="goIndex">欢迎进入</button>
            </div>
        </div>
    </div>
  </template>
<script setup lang="ts">
import { ref, reactive, defineComponent, toRefs, onMounted} from 'vue'
import type { CSSProperties } from 'vue'
import { useRouter, useRoute} from 'vue-router'
const route=useRoute()
const router=useRouter()
const pageSize = ref(20)
let starsRef=ref<HTMLElement>()
const starsCount= 800 //星星数量
const distance= 900 //间距
let title=ref('你好')
let times=ref('10:20:10')
let gotimes=ref('2022-12-30 16:39:00')
let setcall:any=ref('')
let nextbox=ref(true)
function setTime(){
    setcall.value=setTimeout(function(){
        let isnet=timeTo()
        if(isnet==1){
            setTime()
        }
    },1)
}
function timeTo(){
    let nows=new Date().getTime()
    let totimes=new Date(gotimes.value).getTime();
    let cetime=totimes-nows
    let ress=0
    if(cetime>0){
        let calls=Math.floor(cetime/1000)
        times.value=getTime(calls)
        ress=1
    }else{
        if(setcall.value!==''){
            clearTimeout(setcall.value)
        }
        console.log("jin")
        nextbox.value=false
    }
    return ress
}
function getTime(time:number) {
            // 转换为式分秒
            let h:any = Math.floor(time / 60 / 60 % 24)
            h = h < 10 ? '0' + h : h
            let m:any = Math.floor(time / 60 % 60)
             m = m < 10 ? '0' + m : m
            let s:any = Math.floor(time % 60)
             s = s < 10 ? '0' + s : s
            // 作为返回值返回
            let vals=h+":"+m+":"+s
            return vals
}
function goIndex(){
    router.push({path:'/index'})
}
function onloadPage(){
    setTime()
    let starNodes = Array.from(starsRef.value.children as HTMLCollectionOf<HTMLElement>);
			starNodes.forEach((item) => {
				let speed = 0.2 + Math.random() * 1;
				let thisDistance = distance + Math.random() * 300;
				item.style.transformOrigin = `0 0 ${thisDistance}px`;
				item.style.transform =
					`
		        translate3d(0,0,-${thisDistance}px)
		        rotateY(${Math.random() * 360}deg)
		        rotateX(${Math.random() * -50}deg)
		        scale(${speed},${speed})`;
			});
}
onMounted(() => {
//   tableHeight.value = window.innerHeight - tableBox.value.$el.offsetTop - 140
//   window.onresize = () => {
//     tableHeight.value = window.innerHeight - tableBox.value.$el.offsetTop - 140
//   }
  onloadPage()
})
</script>
<style lang="scss" scoped>
#home-box{
    height: 100%;
    width: 100%;
    background-image: linear-gradient(#698cc1,#7f35a5);
    box-sizing: border-box;
    position: relative
}
.content{
    width: 300px;
    position: absolute;
    left: 50%;
    top: 10%;
    margin-left: -150px;
    z-index: 100;
    text-align: center;
}
.head-title{
        background: linear-gradient(to right, red, blue);
        -webkit-background-clip: text;
        color: transparent;
        padding:20px;
}
.head-time{
    font-size: 24px;
    padding:10px;
}
.time-text{
    display: inline-block;
    text-align: center;
    margin:0 auto;
}
.home-butt{
    button{
        height: 40px;
        line-height: 40px;
        border-radius: 8px;
        background: linear-gradient(to right,#9d48a3,#d33);
        font-size: 16px;
        font-weight: 10;
        color: #fff;
        padding:0 10px;
    }
}
</style>